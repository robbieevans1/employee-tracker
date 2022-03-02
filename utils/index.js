
const inquirer = require('inquirer');
const connection = require('../config/connection')

const addDepartment = require('./add_department')
const addEmployee = require('./add_employee')
const addRole = require('./add_role')
const viewDepartments = require('./view_departments')
const viewEmployees = require('./view_employees')
const viewRoles = require('./view_roles')




// prompts user with list of questions to choose from
function questions() {
  inquirer
      .prompt({
          name: 'action',
          type: 'list',
          message: 'What would you like to do?',
          choices: [
                  'View all employees',
                  'View all departments',
                  'View all roles',
                  'Add an employee',
                  'Add a department',
                  'Add a role',
                  'Update employee role',
                  'Delete an employee',
                  'EXIT'
                  ]
          }).then(function (answer) {
              switch (answer.action) {
                  case 'View all employees':
                      viewEmployees();
                      break;
                  case 'View all departments':
                      viewDepartments();
                      break;
                  case 'View all roles':
                      viewRoles();
                      break;
                  case 'Add an employee':
                      addEmployee();
                      break;
                  case 'Add a department':
                      addDepartment();
                      break;
                  case 'Add a role':
                      addRole();
                      break;
                  case 'Update employee role':
                      updateRole();
                      break;
                  case 'Delete an employee':
                      deleteEmployee();
                      break;
                  case 'EXIT': 
                      exitApp();
                      break;
                  default:
                      break;
              }
      })
};




// exit the app
function exitApp() {
    connection.end();
};

module.exports = questions