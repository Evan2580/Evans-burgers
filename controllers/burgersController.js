var express = require ("express");

var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function(req, res){  // READ EVERYTHING
  burger.all(function(data){
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject) //see whats inside of object
    res.render("index", hbsObject); //sends everything in hbsObject to the index
  });
});

router.post("/api/burgers", function(req, res){  //CREATE API ROUTE
  burger.create([

  ])
})

router.put("/api/burgers/:id", function(req, res){ // UPDATE FUNCTION
  var condition = req.params.id;

  console.log(condition);

  burgers.update({

  })
})

router.delete("api/burgers/:id" , function(req,res){
  var condition = req.params.id;

  burgers.delete(condition, function(result){


  });  //end of burgers.del
}); // end of router.del

module.exports = router; 
