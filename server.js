
const connection = require('./config/connection')
const questions = require('./utils/index')

questions();



// exit the app
function exitApp() {
    connection.end();
};