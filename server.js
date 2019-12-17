//bring in require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//using app variable to run express
var app = express();

//setup port for Heroku deployment
var PORT = process.env.PORT || 3000;

//set port to listen
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});