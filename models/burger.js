// import orm.js file //
//create the code that will call the ORM functions using burger specific input for the ORM.
//Export at the end of the burger.js file.
var orm = require("../config/orm.js");
var burger = {
  selectall: function (cb) {
    orm.selectall("burgers", function (res) {
      cb(res);
    });
    console.log("this is working")
  },
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
    console.log("this is creste one")
  },

  updatedOne: function (cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;

