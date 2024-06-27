const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'http://185.241.61.145',
    user: 'root',
    database: 'test',
    password: '12345',
    port: 3306
});

connection.connect((err) => {
    if(err){
        console.log('err', err)
    } else{
        console.log('connect success');
    }
})