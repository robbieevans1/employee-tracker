let questions = require('./index')
const connection = require('../config/connection')
const consoleTable = require('console.table')
const mysql = require('mysql2');


// view all employees in the database
function viewEmployees() {
  let query = 'SELECT * FROM employees';
  let questions = require('./index')
  connection.query(query, function(err, res) {
      if (err) throw err;
      console.log(res.length + ' employees found!');
      console.table('All Employees:', res); 
      questions();
  })
};



module.exports = viewEmployees