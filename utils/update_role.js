const connection = require('../config/connection')
const consoleTable = require('console.table')
const mysql = require('mysql2');
const inquirer = require('inquirer')

let roleArr = [];
function selectRole() {
  connection.query("SELECT * FROM roles", function(err, res) {
    if (err) throw err
    for (let i = 0; i < res.length; i++) {
      roleArr.push(res[i].title);
    }

  })
  return roleArr;
}

function updateRole() {
  connection.query("SELECT employees.last_name, roles.title FROM employees JOIN roles ON employees.role_id = roles.id;", function(err, res) {
  
   if (err) throw err
   console.log(res)
  inquirer.prompt([
        {
          name: "lastName",
          type: "input",
          choices: function() {
            let lastName = [];
            for (let i = 0; i < res.length; i++) {
              lastName.push(res[i].last_name);
            }
            return lastName;
          },
          message: "What is the employee's last name? ",
        },
        {
          name: "role",
          type: "input",
          message: "What is the Employees new title? ",
          choices: selectRole()
        },
    ]).then(function(val) {
      let roleId = selectRole().indexOf(val.role) + 1
      connection.query("UPDATE employee SET WHERE ?", 
      {
        last_name: val.lastName
         
      }, 
      {
        role_id: roleId
         
      }, 
      function(err){
          let questions = require('./index')
          if (err) throw err
          console.table(val)
          questions()
      })

  });
});

}

module.exports = updateRole