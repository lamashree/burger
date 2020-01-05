// import following file//
//express//
//burger.js//
// create the router for the app and export the router at the end of the file//
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
    res.redirect("/burgers");
})

router.get("/burgers", function (req, res) {
    burger.selectall(function (data) {
        var hbs = {
            burgers: data
        };
        console.log(hbs);
        res.render("index", hbs)
    })
});
router.post("/burgers/create", function (req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, 0]
        , function (result) {
            // res.json({ id: result.insertId });
            res.redirect('/')

        })
    router.put('/burgers/update', function (req, res) {
        var condition = 'id = ' + req.params.id;
        console.log("condition", condition);

        burger.update({
            devoured: req.body.devoured
        }, condition, function () {
            res.redirect('/');
        });
    });
});
router.delete("/burgers/delete:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (){
res.redirect("/")
  
    });
});


// Export routes for server.js to use.
module.exports = router;