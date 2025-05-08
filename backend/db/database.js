const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(
  path.resolve(__dirname, "learningApp.db"),
  (err) => {
    if (err) {
      console.error("Error opening database", err);
    } else {
      console.log("Connected to SQLite database");
      db.run(`
      CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        author TEXT,
        createdAt TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);
      db.run(`
      CREATE TABLE courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT
      )
    `);
      db.run(`
      CREATE TABLE modules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      course_id INTEGER,
      title TEXT NOT NULL,
      description TEXT,
      FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
      )
    `);
    }
  }
);

module.exports = db;
