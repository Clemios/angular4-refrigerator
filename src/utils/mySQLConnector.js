var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: '',
    database: 'kitchen'
});

module.exports = pool;