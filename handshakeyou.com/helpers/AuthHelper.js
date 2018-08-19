const User = require('../models/UserModel');

module.exports.authenticate = function(where, callback){
    User.findOne(where, callback);
}