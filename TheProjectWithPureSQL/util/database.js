const  mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'root'            //Its password we gave while installation
});

module.exports = pool.promise();