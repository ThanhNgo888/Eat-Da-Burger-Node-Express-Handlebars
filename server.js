//bring in require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//using app variable to run express
var app = express();

//setup port for Heroku deployment
var PORT = process.env.PORT || 3000;

//add static file
app.use(express.static("public"));

//connect body-parser elements
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//setup handlebars using template engine
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//set routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//set port to listen
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});