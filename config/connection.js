//set up the code to connect node to mysql//
// export this file to orm.js//


// creating connection to database//
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "yourRootPassword",
    database: "burgers_db"
})
// this is actually connecting to the database//
connection.connect(function(err){
    if (err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connection as id " + connection.threadId);
})
// export connection to orm.js //
module.exports = connection;