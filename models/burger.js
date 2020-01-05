// import orm.js file //
//create the code that will call the ORM functions using burger specific input for the ORM.
//Export at the end of the burger.js file.
var orm = require("../config/orm.js");
var table = "burgers";
var burger = {
  selectall: function (cb) {
    orm.selectall(table, function (res) {
      cb(res);
    });
    console.log("this is working")
  },
  create: function (cols, vals, cb) {
    orm.insertOne(table, cols, vals, function (res) {
      cb(res);
    });
  },

  updateOne: function (objColVals, condition, cb) {
    orm.updateOne(table, objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (objColVals, condition, cb) {
    orm.delete(table, objColVals, condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;

