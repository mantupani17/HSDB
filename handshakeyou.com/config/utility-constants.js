var define = require('node-constants')(exports);

define({
    user:'User',
    trainer:'Trainer',
    admin:'Admin',
    superAdmin:'SuperAdmin',
    developer:'Developer',
    owner:'Owner'
});

define('PAYMENT_MODE',{
    COD:"COD",
    NET_BANKING:"NET BANKING",
    CARD:"CARD"
})