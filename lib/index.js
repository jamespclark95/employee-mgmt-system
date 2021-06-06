const connection = require('./connections');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    getDepartments() {
        return this.connection.query("SELECT * FROM department");
        
    }
    addDepartments() {
        return this.connection.query("INSERT INTO department SET ?")
    }
    addRole() {
        return this.connection.query("INSERT INTO role SET ?")
    }
    viewDepartment() {
        return this.connection.query("SELECT * FROM department")
    }
    viewEmployee() {
        return this.connection.query("SELECT * FROM employee")
    }
    viewRole() {
        return this.connection.query("SELECT * FROM role")
    }
    updateRole() {
    }
}










module.exports = new DB(connection)