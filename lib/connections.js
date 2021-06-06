const mysql = require("mysql");
const util = require('util');
require('dotenv').config();


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.user,
    password: process.env.password,
    database: "company_db"
});

connection.connect((err)=> {
    if (err) throw err;
    console.log("connected!" + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;










