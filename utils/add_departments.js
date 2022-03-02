const questions = require('./index')
const connection = require('../config/connection')
const inquirer = require('inquirer')



// add a department to the database
function addDepartment() {
  inquirer
      .prompt([
          {
              name: 'newDepartment', 
              type: 'input', 
              message: 'Which department would you like to add?'
          }
          ]).then(function (answer) {
              connection.query(
                  'INSERT INTO departments SET ?',
                  {
                      name: answer.newDepartment
                  });
              let query = 'SELECT * FROM departments';
              let questions = require('./index')
              connection.query(query, function(err, res) {
              if(err)throw err;
              console.log('Your department has been added!');
              console.table('All Departments:', res);
              questions();
              })
          })
};

module.exports = addDepartment