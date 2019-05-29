//IMPORT THE ORM  to create functions that will interact with the database

var orm = require("../config/orm.js");

var burger = {
  all: function(cb){
    orm.all ("burgers", function(res){
      cb(res);
    });
  },
  // the Variable columns and values of the arrays
  create: function() {
    orm.create(function(res){

    })
  }
}
