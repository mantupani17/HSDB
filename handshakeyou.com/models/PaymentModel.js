var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var utilConfig = require('../config/utility-constants');

var paymentsSchema = new Schema({
    user:{
        userId:{type:String},
        userName:{type:String}
    },
    paymenttype:{type:String,default:utilConfig.PAYMENT_MODE.COD},
    payment:{type:Number,default:0},
    created:{
        createdBy:{type:String,default:'Admin'},
        createdAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    },
    updated:{
        updatedBy:{type:String,default:'Admin'},
        updatedAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    }
});

var PaymentsModel = module.exports = mongoose.model('owner_gym', paymentsSchema);