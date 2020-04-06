let mysql = require('mysql');
let config = require('./config.js')
let connection = mysql.createConnection(config)
connection.connect();

module.exports = function (data) {
    connection.query(data.sql, function (error, results, fields) {
        if (error) throw error;
        data.callback(results);
    });
};
