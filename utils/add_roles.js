const connection = require("../config/connection");
const inquirer = require("inquirer");

// add a role to the database
function addRole() {
	connection.query("SELECT * FROM departments", function (err, res) {
		if (err) throw err;

		inquirer
			.prompt([
				{
					name: "new_role",
					type: "input",
					message: "What new role would you like to add?",
				},
				{
					name: "salary",
					type: "input",
					message: "What is the salary of this role? (Enter a number)",
				},
				{
					name: "Department",
					type: "list",
					choices: function () {
						var deptArry = [];
						for (let i = 0; i < res.length; i++) {
							deptArry.push(res[i].name);
						}
						return deptArry;
					},
				},
			])
			.then(function (answer) {
				let department_id;
				for (let a = 0; a < res.length; a++) {
					if (res[a].name == answer.Department) {
						department_id = res[a].id;
					}
				}

				connection.query(
					"INSERT INTO roles SET ?",
					{
						title: answer.new_role,
						salary: answer.salary,
						department_id: department_id,
					},
					function (err, res) {
						let questions = require("./index");
						if (err) throw err;
						console.log("Your new role has been added!");
						console.table("All Roles:", res);
						questions();
					}
				);
			});
	});
}

module.exports = addRole;