//IMPORT THE ORM  to create functions that will interact with the database

var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res){
        cb(res)
    })
},
insert: function(cols, vals, cb){
    orm.insert("burgers", cols, vals, function(res){
        cb(res)
    })
},
update: function(col, val, id, cb){
    orm.update("burgers", col, val, id, function(res){
        cb(res)
    })
},
delete: function(id, cb) {
    orm.delete("burgers", id, function(res){
        cb(res)
    })
}
}

module.exports= burger;
