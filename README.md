# burger
Click here for link of application.
<https://burger-apps.herokuapp.com/>

## Overview
**Eat-Da-Burger** is the restaurant app that let the user add name of the buger they like to eat and if they already eat the burger then it allow user to devoured the burger which will add burger name to the old favorite.This **burger app** is using mysql Database for storing the data. whenever user add the burger the burger name is added to burger or if user want to delete burger then i will remove burger data from database permanently. I created this app to fulfillment of homework assignment for Bootcamps.

## Tools and Technologies use
- HTML, Handlebars, CSS
- Node.js, NPM packages, Express, Routes, and ORM
- MYSQL
- Github
- Heroku
- Markdown

## Installation
1. Go to <https://github.com/lamashree/burger>
2. Click on **Clone or Download on the right side of the page. copy it.
3. Open CLI  and type git Clone and paste copy link here.
4. Change the diretory to Repository that you clone it.
5. Do NPM install, MYSQL2 and other dependencies.
6. To start your app type **node server.js** in CLI that will start your localhost port.
7. Open any Browser and type **localhost:8080** and hit enter.

## Instruction 
## App Setup
Create a GitHub repo called burger and clone it to your computer.
Make a package.json file by running npm init from the command line.
Install the Express npm package: npm install express.
Create a server.js file.
Install the Handlebars npm package: npm install express-handlebars.
Install MySQL npm package: npm install mysql.
Require the following npm packages inside of the server.js file:
express
### DB Setup
Inside your burger directory, create a folder named db.
In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:
Create the burgers_db.
Switch to or use the burgers_db.
Create a burgers table with these fields:
id: an auto incrementing int that serves as the primary key.
burger_name: a string.
devoured: a boolean.
Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.
Run the schema.sql and seeds.sql files into the mysql server from the command line
Now you're going to run these SQL files.
Make sure you're in the db folder of your app.
Start MySQL command line tool and login: mysql -u root -p.
With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.
Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.
Close out of the MySQL command line tool: exit.





### Config Setup
Inside your burger directory, create a folder named config.
Create a connection.js file inside config directory.
Inside the connection.js file, setup the code to connect Node to MySQL.
Export the connection.
Create an orm.js file inside config directory.
Import (require) connection.js into orm.js
In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
selectAll()
insertOne()
updateOne()



Export the ORM object in module.exports.





### Model setup


Inside your burger directory, create a folder named models.


In models, make a burger.js file.


Inside burger.js, import orm.js into burger.js


Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.


Export at the end of the burger.js file.







### Controller setup


Inside your burger directory, create a folder named controllers.


In controllers, create the burgers_controller.js file.


Inside the burgers_controller.js file, import the following:

Express
burger.js



Create the router for the app, and export the router at the end of your file.



### View setup


Inside your burger directory, create a folder named views.


Create the index.handlebars file inside views directory.


Create the layouts directory inside views directory.


Create the main.handlebars file inside layouts directory.


Setup the main.handlebars file so it's able to be used by Handlebars.


Setup the index.handlebars to have the template that Handlebars can render onto.


Create a button in index.handlebars that will submit the user input into the database.







### Directory structure
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

 ##  Screenshort
  ![post an item page](/public/assets/img/pic.jpg)

This is how **Eat-Da-Burger** app is look like. This is very simple app. The user can add the Designer burger that will add burger name to the Designer burger list which can be seen above the **create your burger** and if user already finished eating the burger from the list they can devoured the burger and that will add the name of the burger to the old favorite and if they no more want to see burger in the list then user can click on the delete button that will permanently detele the burger.
