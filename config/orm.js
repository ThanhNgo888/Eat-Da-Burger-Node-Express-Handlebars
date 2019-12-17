//require connect from connection.js
var connection = require("../config/connection");

//create a (?) function
function createQmarks(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

//create a helper that will translate the string into an SQL readable query
function translateSql(obj){
    var arr = [];
    for(var key in obj){
        var value = obj[key];
        if(Object.hasOwnProperty.call(obj,key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "_" + value)
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(table, cb){
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function(err, res){
            if(err){
                throw err;
            }
            cb(res);
        });
    },

    insertOne: function(table, cols, vals, cb){
        var dbQuery = 
        "INSERT INTO " + 
        table + 
        " (" + 
        cols.toString() + ") " + 
        "VALUES (" + createQmarks(vals.length) + 
        ") ";

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err,res){
            if(err){
                throw err;
            }
            cb(res);
        });
    },
    //creating update
    updateOne: function(table, objColVals, condition, cb){
        var dbQuery = "UPDATE " +
        table + " SET " +
        translateSql(objColVals) +
        " WHERE " + condition;

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err,res){
            if(err){
                throw err;
            }
            cb(res);
        });
    },
    deleteOne: function(table, condition, cb){
        var dbQuery = "DELETE FROM " + table + " WHERE " + condition;

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err,res){
            if(err){
                throw err;
            }
            cb(res);
        });
    }

};