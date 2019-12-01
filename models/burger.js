// import orm.js file //
//create the code that will call the ORM functions using burger specific input for the ORM.
//Export at the end of the burger.js file.
var  orm = require("../config/orm.js");

var burger = {
    selectall: function(cb){
        orm.selectall("burgers", function(res){
            cb(res);
        })
    },
    insertOne: function(cols,vals, cb){
        orm.insertOne("burgers", cols,vals,function(res){
            cb(res);
        })
    },
    updatedOne: function(cb){
        orm.updateOne("burgers", cols, vals, condition, function(res){
            cb(res);
        })
    }
}
module.exports = burger;
