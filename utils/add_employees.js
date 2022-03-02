const questions = require('./index')
const connection = require('../config/connection')
const inquirer = require('inquirer')

// add an employee to the database
function addEmployee() {
  connection.query('SELECT * FROM roles', function (err, res) {
      if (err) throw err;
      inquirer
          .prompt([
              {
                  name: 'first_name',
                  type: 'input', 
                  message: "What is the employee's fist name? ",
              },
              {
                  name: 'last_name',
                  type: 'input', 
                  message: "What is the employee's last name? "
              },
              {
                  name: 'manager_id',
                  type: 'input', 
                  message: "What is the employee's manager's ID? "
              },
              {
                  name: 'role', 
                  type: 'list',
                  choices: function() {
                  var roleArray = [];
                  for (let i = 0; i < res.length; i++) {
                      roleArray.push(res[i].title);
                  }
                  return roleArray;
                  },
                  message: "What is this employee's role? "
              }
              ]).then(function (answer) {
                  let role_id;
                  for (let a = 0; a < res.length; a++) {
                      if (res[a].title == answer.role) {
                          role_id = res[a].id;
                          console.log(role_id)
                      }                  
                  }  
                  connection.query(
                  'INSERT INTO employees SET ?',
                  {
                      first_name: answer.first_name,
                      last_name: answer.last_name,
                      manager_id: answer.manager_id,
                      role_id: role_id,
                  },
                  function (err) {
                      let questions = require('./index')
                      if (err) throw err;
                      console.log('Your employee has been added!');
                      questions();
                  })
              })
      })
};

module.exports = addEmployee