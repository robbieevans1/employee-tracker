const connection = require('../config/connection')
const consoleTable = require('console.table')
const mysql = require('mysql2');


// view all departments in the database
function viewDepartments() {
  let query = 'SELECT * FROM departments';
  let questions = require('./index')
  connection.query(query, function(err, res) {
      if(err)throw err;
      console.table('All Departments:', res);
      questions();
  })
};

module.exports = viewDepartments