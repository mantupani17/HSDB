var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gymTrainerSchema = new Schema({
    gymId:{type:String,required:true},
    trainers:{type:Array,default:[]},
    created:{
        createdBy:{type:String,default:'Admin'},
        createdAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    },
    updated:{
        updatedBy:{type:String,default:'Admin'},
        updatedAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    }
});

var GymTrainerModel = module.exports = mongoose.model('owner_gym', gymTrainerSchema);

GymTrainerModel.addTrainerToGym = function(eventData, callback ){
    this.create(eventData, callback);
}

GymTrainerModel.updateTrainerOfGym = function(where, eventData, callback ){
    this.updateMany(where, eventData, callback);
}

GymTrainerModel.deleteTrainerFromGym = function(where, callback ){
    this.deleteMany(where, callback);
}

GymTrainerModel.findTrainerOfGym = function(where, select, callback ){
    this.find(where, select, callback);
}