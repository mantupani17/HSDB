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