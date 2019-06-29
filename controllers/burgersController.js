var express = require("express");

var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function (req, res) { // READ EVERYTHING
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject) //see whats inside of object
    res.render("index", hbsObject); //sends everything in hbsObject to the index
  });
});

router.post("/api/burgers", function(req, res){
  let newBurger = req.body.burgerName;
  console.log(newBurger)
  burger.insert("burgerName", newBurger, function(data){
    res.redirect("/")
  })
})


router.put("/api/burgers/:id", function (req, res) { // UPDATE FUNCTION
  var condition = req.params.id;
  burger.update("devoured",1,condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }

    })
})

router.delete("/api/burgers/:id", function (req, res) {
  var condition = req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();

    }
  }); //end of burgers.del
}); // end of router.del

module.exports = router;
