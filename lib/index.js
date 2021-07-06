const connection = require('./connections');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    getDepartments() {
        return this.connection.query("SELECT * FROM department");
        
    }
    addDepartments(dept_name) {
        return this.connection.query("INSERT INTO department SET ?", dept_name)
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









module.exports = new DB(connection)