var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    gym_name:{type:String, required:true},
    password:{type:String, required:true},
    bio:{
        banner:{type:String,default:''},
        mobile:{type:String, required:true, minlength: 10, maxlength: 10},
        email:{type:String,required:true},
        address:{type:String,default:''},
        area_code:{type:String,required:true,maxlength:6,minlength:6},
        owner_name:{type:String,required:true},
        owner_id:{type:String,required:true},
        detail_info:{type:String,required:true},
    },
    trainers:{type:Array,default:[]},
    status:{type:String,default:'Active'},
    created:{
        createdBy:{type:String,default:'Admin'},
        createdAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    },
    updated:{
        updatedBy:{type:String,default:'Admin'},
        updatedAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    },
    members:{type:Array,default:[]}
});

module.exports = mongoose.model('Gyms', schema);
