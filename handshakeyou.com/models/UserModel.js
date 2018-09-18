var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    name:{type:String, required:true},
    password:{type:String, required:true},
    bio:{
        profilepic:{type:String,default:''},
        experience:{type:Number,default:0},
        DOB:{type:Date,required:true},
        sex:{type:String,required:true},
        height:{type:Number, required:true},
        weight:{type:Number, required:true},
        bGroup:{type:String,default:''},
        mobile:{type:String, required:true, minlength: 10, maxlength: 10},
        email:{type:String,required:true}
    },
    roles:{type:Array,default:['user']},
    skills:{type:Array,default:[]},
    status:{type:String,default:'Active'},
    createdAt:{type:Date, default: new Date(+new Date() + 7*24*60*60*1000)},
    trainers:{type:Array,default:[]},
    type_trainee:{type:String,default:''}
});

module.exports = mongoose.model('User', schema);
