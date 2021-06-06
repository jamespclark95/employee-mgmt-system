const inq = require('inquirer');
const db = require('./lib/index');


inq.prompt([
    {
    type: 'list',
    message: "Select a choice below",
    name: "choice",
    choices: [
        "ADD an employee",
        "UPDATE an existing employee",
        "FIND an employee",
        "EXIT"
    ]
    }
])

db.getDepartments().then(response => console.log(response))



// db.addDepartments().then(response => console.log('department added!'))



// Build a command-line application that at a minimum allows the ud to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles
