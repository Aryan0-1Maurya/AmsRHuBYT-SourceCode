import { Database } from "bun:sqlite";

const db = new Database("notes.db");

db.run(
  `CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL
    )`  
);

export default db