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
            burgers:data
        };
        console.log(hbs);
        res.render("index", hbs)
    })
});
router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, res.body.devoured], function(result){
        res.json({ id: result.insertId });
        // res.redirect('/')

    })
})
router.put('/api/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function () {
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;