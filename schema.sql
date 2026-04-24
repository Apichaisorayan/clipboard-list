-- D1 Database Schema for Spiritual Gift Survey
DROP TABLE IF EXISTS results;

CREATE TABLE results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    scores TEXT NOT NULL,
    top_gift TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_timestamp ON results(timestamp DESC);
CREATE INDEX idx_name ON results(name);
