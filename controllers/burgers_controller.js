// import following file//
//express//
//burger.js//
// create the router for the app and export the router at the end of the file//
var express = require("express");
var burger = require("../models/burger.js");
var router = express.router();

router.get("/", function (req, res) {
    burger.selectall(function (data) {
        var object = {
            burgers: dta
        };
        console.log(object);
        res.render("index", object)
    })
});
router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ][
        req.body.burger_name
    ], function (result) {
        res.redirect('/')
    })
})
router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    burger.updateOne({
      devoured: true
    }, condition, function(data) {
      res.redirect('/');
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;