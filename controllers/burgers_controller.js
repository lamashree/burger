// import following file//
//express//
//burger.js//
// create the router for the app and export the router at the end of the file//
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    res.redirect("/burgers");
})

router.get("/burgers", function (req, res) {
    burger.selectall(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
});
router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ][
        req.body[burger_name].req.body[devoured]
    ],
    function (result) {
        res.redirect('/')
    })
    console.log("after insert");
})
router.put('/api/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;