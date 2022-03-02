let questions = require('./index')
const connection = require('../config/connection')
const consoleTable = require('console.table')
const mysql = require('mysql2');



// view all roles in the database
function viewRoles() {
  let query = 'SELECT * FROM roles'
  let questions = require('./index')
  connection.query(query, function(err, res){
      if (err) throw err;
      console.table('All Roles:', res);
      questions();
  })
};

module.exports = viewRoles