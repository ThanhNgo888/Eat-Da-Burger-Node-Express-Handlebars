//bring in required dependencies for express
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");


//use the app variable to run Express
var app = express();

//setup the port to make a deployment for Heroku
var PORT = process.env.PORT || 3000;


//static files
app.use(express.static("public"));


//connect bodyParser elements(urlencoded and json files)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//setup handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//add routes that will will be building in the future
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//have the port listen
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
