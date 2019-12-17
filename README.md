# HW13-Eat-Da-Burger

Directory structure
All the recommended files and directories from the steps above should look like the following structure:
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
============================================================================================================
***Node.js Burger Application ***
**Set up Database using express, express handlebars, body parser and MySQL
1. install package.json
npm init -y
should have these dependencies in package.json
"dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "express-handlebars": "^3.1.0",
    "mysql": "^2.17.1"
  }
2. install node modules packages
npm install express express-handlebars body-parser mysql.
3. install nodemon globally ->serer that refreshes automatically development.
npm install -g nodemon
->package.json:
"scripts":{
    "start": "node server.js",
    "dev": "nodemon serer.js"
}
4. creating database using mySQL workbench
In db folder:
schema.sql
copy data in schema and paste in myworkbench code area->run ->refresh-> this will create burger database, use it and create a table ->Now we have our table created.

seeds.sql
copy data in seeds file and paste in myworkbench and select all ->run it -> 
check it out and run a query:
SELECT * FROM burgers -> run it -> should see the burger column and database now is ready to use.
=============================================================================================================
check to see if nodemon is working:
npm run dev
node server.js

set up server.js file
===========================================================================================================
*** Create ORM Connection*
In config folder:
set up connection.js file for connection
===========================================
===========================================================================================================
***Create MVC(Model, View, Controller)*** 
1. set up Models:
create burger.js and connect ORM to 
2. set up Controllers
create burgers_controllers.js file for router controllers
================================================================
3. In public folder -> assests folder ->js folder -> burger.js file:
This file contains the Ajax that calls all the on click and submit events used to trigger the actions. 
4. connect handlebars





