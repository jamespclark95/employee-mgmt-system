const inq = require("inquirer");
const DB = require("./lib/index");
const dpMenuQs = require("./questions/menu-questions/dpMenu-questions");
const empMenuQs = require("./questions/menu-questions/empMenu-questions");
const roleMenuQs = require("./questions/menu-questions/roleMenu-questions");
const { printTable } = require('console-table-printer')

function init() {
  inq
    .prompt([
      {
        type: "list",
        message: "Select a choice below",
        name: "choice",
        choices: [
          "Work with Departments",
          "Work with Employees",
          "Work with Roles",
          "EXIT",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.choice) {
        case "Work with Departments":
          dpMenu();
          break;
        case "Work with Employees":
          empMenu();
          break;
        case "Work with Roles":
          roleMenu();
          break;
        default:
          process.exit();
      }
    });
}

function dpMenu() {
  inq.prompt(dpMenuQs).then((answer) => {
    console.log(answer);
    switch (answer.dpChoice) {
      case "Create":
        createDepartment();
        break;
      case "Read":
        viewDept();
        break;
      case "Update":
        editDeptName();
        break;
      case "Delete":
        removeDept();
        break;
      default:
        process.exit();
    }
  });
}

function empMenu() {
  inq.prompt(empMenuQs).then((answer) => {
    console.log(answer);
    switch (answer.empChoice) {
      case "Create":
        createEmp();
        break;
      case "Read":
        viewEmployees();
        break;
      case "Update":
        editEmp();
        break;
      case "Delete":
        removeEmp();
        break;
      default:
        process.exit();
    }
  });
}

function roleMenu() {
  inq.prompt(roleMenuQs).then((answer) => {
    console.log(answer);
    switch (answer.roleChoice) {
      case "Create":
        createRole();
        break;
      case "Read":
        viewRoles();
        break;
      case "Update":
        editRole();
        break;
      case "Delete":
        removeRole();
        break;
      default:
        process.exit();
    }
  });
}

function viewDept() {
    DB.getDepartments().then(dbRes => {
        printTable(dbRes)
        init()
    })
}

function viewRoles() {
    DB.viewRole().then(dbRes => {
        printTable(dbRes)
        init()
    })
}


function viewEmployees() {
    DB.viewEmployee().then(dbRes => {
        printTable(dbRes)
        init()
    })
}

function createDepartment() {
    DB.addDepartments().then(dbRes => {
        console.log(dbRes);
        viewDept()
    })
}




init();

// HAVE AN ISSUE WITH THE "?" IN THE MYSQL STATEMENT
// I'm not able to get any of the "?" to work.. hence not being able to create/update any departments/roles/employees.. all this application can do is view...

