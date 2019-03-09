const pg = require('pg');
const connectionString =  "postgres://postgres:v1v2v3v4@localhost:5433/studybase";
const db = new pg.Client(connectionString);

db.connect((err, client) => {
    if (err) throw err;
    console.log('Connected to database', db.database);
});

module.exports = db;
