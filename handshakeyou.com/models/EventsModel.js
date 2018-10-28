var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventsSchema = new Schema({
    eventname:{type:String,required:true},
    eventdetails:{
        eventdate:{type:Date},
        eventvenue:{type:String},
        eventby:{type:String},
        eventinfo:{type:String}
    },
    created:{
        createdBy:{type:String,default:'Admin'},
        createdAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    },
    updated:{
        updatedBy:{type:String,default:'Admin'},
        updatedAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    }
});

var EventsModel = module.exports = mongoose.model('owner_gym', eventsSchema);

EventsModel.createEvent = function(eventData, callback ){
    this.create(eventData, callback);
}

EventsModel.updateEvent = function(where, eventData, callback ){
    this.updateMany(where, eventData, callback);
}

EventsModel.deleteEvent = function(where, callback ){
    this.deleteMany(where, callback);
}

EventsModel.findEvent = function(where, select, callback ){
    this.find(where, select, callback);
}