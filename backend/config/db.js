const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Path to the database file
const dbPath = path.resolve(__dirname, '../taskDB.sqlite');

// Create or open the database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to connect to SQLite database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create the tasks table if it doesn't exist
db.run(
  `CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    due_date TEXT NOT NULL,
    status TEXT DEFAULT 'Pending'
  )`,
  (err) => {
    if (err) {
      console.error('Failed to create tasks table:', err.message);
    } else {
      console.log('Tasks table is ready.');
    }
  }
);

module.exports = db;
