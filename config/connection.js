//requiring dependency
var mysql = require("mysql");

//create connection to the database
connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

//create a connection and console log if it's connected
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stact);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//export the module
module.exports = connection;
