var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userAttendanceSchema = new Schema({
    userId:{type:String,required:true},
    attendancedate:{type:Array,default:[]},
    gymId:{type:String,required:true},
    created:{
        createdBy:{type:String,default:'Admin'},
        createdAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    },
    updated:{
        updatedBy:{type:String,default:'Admin'},
        updatedAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    }
});

var UserAttendanceModel = module.exports = mongoose.model('user_attendance', userAttendanceSchema);

UserAttendanceModel.addAttendanceOfUser = function(attendanceData, callback ){
    this.create(attendanceData, callback);
}
UserAttendanceModel.findAttendanceOfUser = function(where, select, callback ){
    this.find(where, select, callback);
}