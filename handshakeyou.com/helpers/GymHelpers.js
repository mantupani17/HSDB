const Gym = require('../models/GymModel');

// get all users
module.exports.getAllGyms = function( filter, select, callback, limit){
    filter = filter || {};
    select = select || {};
    limit = limit || 10000;
    Gym.find(filter, select,callback).limit(limit);
}

// register gym
module.exports.addGym = function(user, callback){
    Gym.create(user, callback);
}

module.exports.viewGym = function(where, select,limit,skip,callback){
    Gym.find(where,select,callback).limit(limit).skip(skip);
}

module.exports.updateGym = function(where, updateData, callback){
    Gym.update(where, updateData, callback);
}

module.exports.getGymBanner = function(where, callback){
    Gym.findById(where,'bio.banner', callback);
}

module.exports.isExist = function(where,select, callback){
    Gym.findById(where, select,callback);
}

