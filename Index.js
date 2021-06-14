const inquirer = require('inquirer');


const companyMenu = function () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What action do you want to take?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'
            ]
        }
    ]).then((action) => {
        console.log(action);
    })
}

companyMenu();