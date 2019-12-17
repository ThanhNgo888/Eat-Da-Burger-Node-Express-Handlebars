var orm = require("../config/orm");

//create a variable called burger and export it
var burger = {
    //callback all ORM
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.selectAll("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.selectAll("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },
    deleteOne: function(condition, cb){
        orm.selectAll("burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;