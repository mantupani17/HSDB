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

OwnerGymModel.addGymToOwner = function(ownerGymData, callback ){
    this.create(ownerGymData, callback);
}

OwnerGymModel.updateGymOfOwner = function(where, ownerGymData, callback ){
    this.updateMany(where, ownerGymData, callback);
}

OwnerGymModel.deleteGymFromOwner = function(where, callback ){
    this.deleteMany(where, callback);
}

OwnerGymModel.findGymOfOwner = function(where, select, callback ){
    this.find(where, select, callback);
}