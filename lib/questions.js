module.exports = {
    starterQuestions: {
        type: 'list',
        message: 'Select an action',
        name: 'starterQ',
        choices: [
            "ADD Department",
            "ADD Employee",
            "ADD Role",
            "VIEW Departments",
            "VIEW Employees",
            "VIEW Roles",
            "UPDATE Roles",
            "EXIT"
        ]
    },
    addEmployee: [{
        type: 'input',
        message: 'Employee First Name',
        name: 'first_name'
    },
    {
        type: 'input',
        message: 'Employee Last Name',
        name: 'last_name'  
    },
    {
        type: 'input',
        message: 'Employee Role',
        name: 'role_id'  
    },
    {
        type: 'input',
        message: 'Manager ID of Employee',
        name: 'manager_id'  
    }
    ],
    addDepartment: {
        type: 'input',
        message: 'What is your new department called?',
        name: 'dept_name'  
    },
    addRole: [{
        type: 'input',
        message: 'What is your new role called?',
        name: 'role_title'  
    },
    {
        type: 'input',
        message: 'What is the salary for this role?',
        name: 'salary'  
    },
    {
        type: 'input',
        message: 'What department is relevant to this role?',
        name: 'dept_id_role'  
    }
    ]
}