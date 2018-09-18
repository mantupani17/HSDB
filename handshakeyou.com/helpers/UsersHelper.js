const User = require('../models/UserModel');


// get all users
module.exports.getAllUsers = function( filter, select, limit, callback){
    filter = filter || {};
    select = select || {};
    limit = limit || 10000;
    User.find(filter, select,callback).limit(limit);
}

// register user
module.exports.addUser = function(user, callback){
    User.create(user, callback);
}