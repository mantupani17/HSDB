const GymHelpers = require('./../helpers/GymHelpers');
var fs = require('fs');
// add new gym
module.exports.addNewGym = function(req, res){
    var postData = req.body;
    const result = {message:'New gym added', status:false, data:[]};
    var owner = postData.owner.split('#####');
    var trainerData = postData.trainer;
    var trainers = [];
    if( typeof trainerData =='Array' && trainerData.length > 1){
        for(var i=0;i<trainerData.length; i++){
            var trainer = trainerData[i].split('#####');
            var trainerCollection = {
                _id:trainer[0],
                name:trainer[1]
            }
            trainers.push(trainerCollection);
        }
    }else{
        var trainer = trainerData.split('#####');
        console.log('single triner',trainer);
        var trainerCollection = {
            _id:trainer[0],
            name:trainer[1]
        }
        trainers.push(trainerCollection);
    }
    const gymData = {
        gym_name:postData.gName,
        password:'a1b2c3',
        bio:{
            mobile:postData.mobile,
            email:postData.email,
            address:postData.address.trim(),
            area_code:postData.pin,
            owner_name:owner[1],
            owner_id:owner[0],
            detail_info:postData.detail.trim(),
        },
        trainers:trainers,
    }
    GymHelpers.addGym(gymData, function(err, data){
        if(err){
            console.log(err);
            result.message = 'Failed';
            result.data = [];
            result.status = false;
            res.json(result);
            throw err;
        }

        result.data = data;
        result.message = 'Gym added successfully';
        result.status = true;
        res.json(result);
    })
}

// view all gym
module.exports.viewAllGym = function(req, res){
    const result = {status:true, data:[]};
    GymHelpers.viewGym(function(err,data){
        if(err){
            console.log(err);
            result.status = false;
            res.json(result);
            throw err;
        }
        result.data = data;
        res.json(result);
    });

}

module.exports.viewAllGymNames = function(req, res){
    const result = {status:true, data:[]};
    GymHelpers.getAllGyms({},'gym_name',function(err,data){
        if(err){
            console.log(err);
            result.status = false;
            res.json(result);
            throw err;
        }
        result.data = data;
        res.json(result);
    });
}

module.exports.changeStatus = function(req, res){
    const result = {status:false, message:'Status update failed', data:[]}
    const getData = req.query;
    const where = {_id:getData._id};
    const updateData = {status:getData.status};
    GymHelpers.updateGym(where, updateData, (err, data)=>{
        if(err){
            console.log(err);
            res.json(result);
            throw err;
        }
        console.log(data)
        result.data = data;
        result.message = 'Status updated';
        result.status = true;
        res.json(result);
    });
}

// upload profile pic
module.exports.uploadDP = function(req, res){
    const result = {status:false,message:'Upload failed...',data:[]}
    const postData = req.body;
    const where = {};
    if(typeof postData.gym != 'undefined' && postData.gym != ''){
        where._id = postData.gym;
    }
    GymHelpers.isExist(where, 'bio.banner', (err, data)=>{
        if(err){
            console.log(err);
        }
        var image = data.bio.banner;
        var path =  'public/dps/'+image
        if(fs.existsSync(path)){
            console.log('file is exist...');
            fs.unlink(path, function(err){
                if(err){
                    console.log(err);
                    throw err;
                }
                console.log('file deleted successfully...');
            });
        }
    });
    // TODO:: check if banner is exist delete the file and update
    var updateData = {'bio.banner':postData.banner};
    GymHelpers.updateGym(where,updateData, (err, data)=>{
        if(err){
            console.log(err);
            res.json(result);
            throw err;
        }
        result.status = true;
        result.message = 'Successfully uploaded...';
        result.data = data;
        res.json(result);
    });
}

module.exports.getGymBanner = function(req, res){
    const result = {status:false, banner:''};
    var getData = req.query;
    GymHelpers.getGymBanner({_id:getData._id}, function(err, banner){
        if(err){
            console.log(err);
            res.json(result);
            throw err;
        }
        result.status = true;
        result.banner = banner;
        res.json(result);
    })
}