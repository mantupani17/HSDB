var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var utilConfig = require('../config/utility-constants');

var paymentsSchema = new Schema({
    user:{
        userId:{type:String},
        userName:{type:String}
    },
    paymenttype:{type:String,default:utilConfig.PAYMENT_MODE.COD},
    paymentRupees:{type:Number,default:0},
    created:{
        createdBy:{type:String,default:'Admin'},
        createdAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    },
    updated:{
        updatedBy:{type:String,default:'Admin'},
        updatedAt:{type:Date,default:new Date(+new Date() + 7*24*60*60*1000)}
    }
});

var PaymentsModel = module.exports = mongoose.model('user_payments', paymentsSchema);

PaymentsModel.createPaymentDetails = function(paymentData, callback ){
    this.create(paymentData, callback);
}

PaymentsModel.updatePaymentDetails = function(where, paymentData, callback ){
    this.updateMany(where, paymentData, callback);
}

PaymentsModel.deletePaymentDetails = function(where, callback ){
    this.deleteMany(where, callback);
}

PaymentsModel.findPaymentDetails = function(where, select, callback ){
    this.find(where, select, callback);
}