// import connection.js file to orm.js//
// methods that will execute the necessary mysql command in controllers.
// these are the methods in order to retrieve and store data in database//
//selectAll()//
//insertOne()//
//updateOne()//
// export  ORM object in module.exports//

var connection = require("../config/connection.js");
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  // function that will run for select all from database//
  function objToSql(ob) {
    // column1=value, column2=value2,...
    var arr = [];
  
    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }
  
    return arr.toString();
  }
var orm = {
    selectall: function (tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols,vals, cb){
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.tostring();
        queryString +=") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.lengh);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        })
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
} 
module.exports = orm;
