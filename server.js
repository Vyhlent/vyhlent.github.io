'use strict';

require('dotenv').config();
const express   = require('express');
const bcrypt    = require('bcryptjs');
const jwt       = require('jsonwebtoken');
const cors      = require('cors');
const fs        = require('fs');
const path      = require('path');
const initSqlJs = require('sql.js');

const PORT        = process.env.PORT       || 3001;
const JWT_SECRET  = process.env.JWT_SECRET || 'change-me-in-production';
const DB_FILE     = process.env.DB_FILE    || path.join(__dirname, 'garden.db');
const SALT_ROUNDS = 12;
const USERNAME_RE = /^[a-zA-Z0-9_-]{3,32}$/;

let SQL, db;

function persistDb() {
  fs.writeFileSync(DB_FILE, Buffer.from(db.export()));
}

async function initDb() {
  SQL = await initSqlJs();
  if (fs.existsSync(DB_FILE)) {
    db = new SQL.Database(fs.readFileSync(DB_FILE));
    console.log('[db] Loaded existing database from', DB_FILE);
  } else {
    db = new SQL.Database();
    console.log('[db] Created new database at', DB_FILE);
  }
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    username   TEXT    NOT NULL UNIQUE COLLATE NOCASE,
    password   TEXT    NOT NULL,
    created_at TEXT    NOT NULL DEFAULT (datetime('now'))
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS user_data (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    key        TEXT    NOT NULL,
    value      TEXT    NOT NULL,
    updated_at TEXT    NOT NULL DEFAULT (datetime('now')),
    UNIQUE(user_id, key)
  )`);
  persistDb();
  console.log('[db] Schema ready');
}

function dbGet(sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const row = stmt.step() ? stmt.getAsObject() : null;
  stmt.free();
  return row;
}

function dbAll(sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

function dbRun(sql, params = []) {
  db.run(sql, params);
  persistDb();
}

function signToken(user) {
  return jwt.sign({ sub: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token  = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Missing token' });
  try { req.user = jwt.verify(token, JWT_SECRET); next(); }
  catch { res.status(401).json({ error: 'Invalid or expired token' }); }
}

const app = express();
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || '*', methods: ['GET','POST','PUT','DELETE','OPTIONS'], allowedHeaders: ['Content-Type','Authorization'] }));
app.use(express.json({ limit: '2mb' }));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.post('/auth/register', async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password)
    return res.status(400).json({ error: 'Username and password are required' });
  if (!USERNAME_RE.test(username))
    return res.status(400).json({ error: 'Username must be 3–32 characters: letters, numbers, _ or -' });
  if (password.length < 8)
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  if (dbGet('SELECT id FROM users WHERE username = ?', [username]))
    return res.status(409).json({ error: 'That username is already taken' });
  const hash = await bcrypt.hash(password, SALT_ROUNDS);
  dbRun('INSERT INTO users (username, password) VALUES (?, ?)', [username.toLowerCase(), hash]);
  const user = dbGet('SELECT id, username, created_at FROM users WHERE username = ?', [username.toLowerCase()]);
  console.log(`[auth] Registered: ${user.username}`);
  res.status(201).json({ token: signToken(user), user: { id: user.id, username: user.username, created_at: user.created_at } });
});

app.post('/auth/login', async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password)
    return res.status(400).json({ error: 'Username and password are required' });
  const user = dbGet('SELECT * FROM users WHERE username = ?', [username.toLowerCase()]);
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ error: 'Invalid username or password' });
  console.log(`[auth] Login: ${user.username}`);
  res.json({ token: signToken(user), user: { id: user.id, username: user.username, created_at: user.created_at } });
});

app.get('/auth/me', requireAuth, (req, res) => {
  const user = dbGet('SELECT id, username, created_at FROM users WHERE id = ?', [req.user.sub]);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ user });
});

app.post('/auth/change-password', requireAuth, async (req, res) => {
  const { current_password, new_password } = req.body || {};
  if (!current_password || !new_password)
    return res.status(400).json({ error: 'current_password and new_password are required' });
  if (new_password.length < 8)
    return res.status(400).json({ error: 'New password must be at least 8 characters' });
  const user = dbGet('SELECT * FROM users WHERE id = ?', [req.user.sub]);
  if (!(await bcrypt.compare(current_password, user.password)))
    return res.status(401).json({ error: 'Current password is incorrect' });
  dbRun('UPDATE users SET password = ? WHERE id = ?', [await bcrypt.hash(new_password, SALT_ROUNDS), req.user.sub]);
  res.json({ message: 'Password updated' });
});

app.delete('/auth/account', requireAuth, async (req, res) => {
  const { password } = req.body || {};
  if (!password) return res.status(400).json({ error: 'Password is required to delete account' });
  const user = dbGet('SELECT * FROM users WHERE id = ?', [req.user.sub]);
  if (!(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ error: 'Incorrect password' });
  dbRun('DELETE FROM users WHERE id = ?', [req.user.sub]);
  console.log(`[auth] Deleted account: ${user.username}`);
  res.json({ message: 'Account deleted' });
});

app.get('/data/:key', requireAuth, (req, res) => {
  const row = dbGet('SELECT value, updated_at FROM user_data WHERE user_id = ? AND key = ?', [req.user.sub, req.params.key]);
  if (!row) return res.status(404).json({ error: 'Key not found' });
  try { res.json({ key: req.params.key, value: JSON.parse(row.value), updated_at: row.updated_at }); }
  catch { res.json({ key: req.params.key, value: row.value, updated_at: row.updated_at }); }
});

app.put('/data/:key', requireAuth, (req, res) => {
  const { value } = req.body || {};
  if (value === undefined) return res.status(400).json({ error: 'value is required in the request body' });
  dbRun(`INSERT INTO user_data (user_id, key, value, updated_at) VALUES (?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`,
    [req.user.sub, req.params.key, typeof value === 'string' ? value : JSON.stringify(value)]);
  res.json({ key: req.params.key, saved: true });
});

app.delete('/data/:key', requireAuth, (req, res) => {
  dbRun('DELETE FROM user_data WHERE user_id = ? AND key = ?', [req.user.sub, req.params.key]);
  res.json({ key: req.params.key, deleted: true });
});

app.get('/data', requireAuth, (req, res) => {
  res.json({ keys: dbAll('SELECT key, updated_at FROM user_data WHERE user_id = ? ORDER BY updated_at DESC', [req.user.sub]) });
});

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`\n🌱 Garden Planner API running on http://localhost:${PORT}`);
    console.log(`   POST   /auth/register        — create account`);
    console.log(`   POST   /auth/login           — sign in, receive JWT`);
    console.log(`   GET    /auth/me              — get current user (auth)`);
    console.log(`   POST   /auth/change-password — update password (auth)`);
    console.log(`   DELETE /auth/account         — delete account (auth)`);
    console.log(`   PUT    /data/:key            — save user data (auth)`);
    console.log(`   GET    /data/:key            — load user data (auth)`);
    console.log(`   GET    /data                 — list all keys (auth)`);
    console.log(`   DELETE /data/:key            — delete user data (auth)\n`);
  });
}).catch(err => { console.error('Failed to init DB:', err); process.exit(1); });
