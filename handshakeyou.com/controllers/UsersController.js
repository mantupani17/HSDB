const UsersHelpers = require('../helpers/UsersHelper');

module.exports.getAllUsers = function(req, res){
    const result = {status:true, message:"",data:[]};
    const where = {
        $and:[
            {roles:{$in:['Trainer','User']}},
            {status:'Active'}
        ]
    };
    UsersHelpers.getAllUsers(where, function(err,users){
        if(err){
            return {status:false, data:[]};
            throw err;
        }
        result.data = users;
        res.json(result);
    });
}

module.exports.getAllTrainers = function(req, res){
    const result = {status:true, message:'',data:[]};
    const where = {
        $and:[
            {roles:{$in:['Trainer']}},
            {status:'Active'}
        ]
    };
    UsersHelpers.getAllUsers(where, function(err, trainers){
        if(err){
            return result;
            throw err;
        }
        result.data = trainers;
        res.json(result);
    });
}

module.exports.getAllOwners = function(req, res){
    const result = {status:true, message:'',data:[]};
    const where = {
        $and:[
            {roles:{$in:['Owner']}},
            {status:'Active'}
        ]
    };
    UsersHelpers.getAllUsers(where, function(err, owners){
        if(err){
            return result;
            throw err;
        }
        result.data = owners;
        res.json(result);
    });
}


module.exports.addNewUser = function(req, res){
    const result = {status:true, message:"User added successfully",data:[]};
    const formData = req.body;
    const role = formData['userType'] || ''
    let roles = []
    if(role != 'User' && role != ''){
        roles = ['User', role];
    }else{
        roles = ['User'];
    }
    const user = {
        name:formData['uName'],
        password:formData['password'],
        bio:{
            DOB:formData['dob'],
            sex:formData['sex'],
            height:formData['height'],
            weight:formData['weight'],
            bGroup:formData['bloodgp'],
            mobile:formData['mobile'],
            email:formData['email']
        },
        roles:roles
    };
    UsersHelpers.addUser(user,function(err, user){
        if(err){
            console.log(err);
            res.json({status:false, message:"Adding user is failed"})
            throw err;
        }
        result.data = user;
        res.json(result);
    });
}

module.exports.createAdmin = function(){
    const result = {status:true, message:"User added successfully",data:[]};
    const admin = {
        name:'admin',
        username:'mantu_admin',
        password:'mantu123',
        bio:{
            profilepic:'',
            experience:0,
            DOB:new Date(),
            sex:'Male',
            height:0,
            weight:0,
            bGroup:'A+',
            mobile:'7873160006',
            email:'admin@mantu.com',
            shift:'night',
            qualification:'MCA',
            proffession:'FULL STAK DEVELOPER',
            skinColor:'white',
            address:{
                areapin:560068,
                city:'',
                state:'',
                district:'',
                street:'',
                fatersname:'',
                mothersname:'',
            },
            gymId:''
        },
        roles:['Admin'],
        lastlogin:new Date()
    }
    UsersHelpers.addUser(admin,function(err, user){
        if(err){
            console.log(err);
            // res.json({status:false, message:"Adding user is failed"})
            throw err;
        }
        result.data = user;
        console.log(result);
        // res.json(result);
    });
}