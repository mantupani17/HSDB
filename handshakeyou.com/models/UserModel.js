var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    name:{type:String, required:true},
    password:{type:String, required:true},
    bio:{
        DOB:{type:Date,required:true},
        sex:{type:String,required:true},
        height:{type:Number, required:true},
        weight:{type:Number, required:true},
        bGroup:{type:String,default:''},
        mobile:{type:String, required:true, minlength: 10, maxlength: 10},
        email:{type:String,required:true}
    },
    roles:{type:Array,default:['user']}
});

module.exports = mongoose.model('User', schema);
