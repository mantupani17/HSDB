const UsersHelpers = require('../helpers/UsersHelper');

module.exports.getAllUsers = function(req, res){
    const result = {status:true, message:"",data:[]};
    UsersHelpers.getAllUsers(function(err,users){
        if(err){
            return {status:false, data:[]};
            throw err;
        }
        result.data = users;
        res.json(result);
    });
}

module.exports.addNewUser = function(req, res){
    const result = {status:true, message:"User added successfully",data:[]};
    const formData = req.body;
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
        roles:['User']
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