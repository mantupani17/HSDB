var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ownerGymSchema = new Schema({
    ownerId:{type:String,required:true},
    gyms:{type:Array,default:[]},
    created:{
        createdBy:{type:String,default:'Admin'},
        createdAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    },
    updated:{
        updatedBy:{type:String,default:'Admin'},
        updatedAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    }
});

var OwnerGymModel = module.exports = mongoose.model('owner_gym', ownerGymSchema);

OwnerGymModel.addGymToOwner = function(eventData, callback ){
    this.create(eventData, callback);
}

OwnerGymModel.updateGymOfOwner = function(where, eventData, callback ){
    this.updateMany(where, eventData, callback);
}

OwnerGymModel.deleteGymFromOwner = function(where, callback ){
    this.deleteMany(where, callback);
}

OwnerGymModel.findGymOfOwner = function(where, select, callback ){
    this.find(where, select, callback);
}