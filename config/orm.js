// Import MySQL connection.
let connection = require("../config/connection.js");

let orm = {
    all: function(input, cb) {
        let queryBurger = "SELECT * FROM " + input + ";"
        connection.query(queryBurger, function(err, data){
            if (err) throw err;
            cb(data)
        })
    },
    insert: function(table, cols, vals, cb) {
        let queryBurger = "INSERT INTO " + table + "(" + cols + ") VALUES ('" + vals + "');"
        connection.query(queryBurger, function(err, data){
            if (err) throw err;
            cb(data)
        })
    },
    update: function(table, col, val, id, cb) {
        let queryBurger = "UPDATE " + table + " SET " + col + " = '" + val + "' WHERE id=" + id + ";"
        connection.query(queryBurger, function(err, data){
            if (err) throw err;
            cb(data)
        })
    },
    delete: function(table, id, cb) {
        let queryBurger = "DELETE FROM " + table + " WHERE id=" + id + ";"
        connection.query(queryBurger, function(err, data){
            if (err) throw err;
            cb(data)
        })
    }
}

module.exports = orm
