var inq = require("inquirer");
var mysql = require("mysql");
var app = require("../index");
var find = require("./findEmployee");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Pinkerton9",
    database: "company_db"
});

