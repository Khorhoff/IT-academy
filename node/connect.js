const express = require("express");
const mysql = require('mysql2');

const app = express();
const urlencodedParser = express.urlencoded({extended: false});

const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost ',
    user: 'root',
    database: 'test',
    password: '12345',
    port: 3306
});

app.get("/user", (request, response) => {

    pool.query('select * from users', (err, data) => {
        if (err) return console.log(err);
        response.json(data);
    })
});

app.listen(3002, () => {
    console.log("Server started on port 3002");
});
