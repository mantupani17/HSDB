const LoginHelpers = require('../helpers/AuthHelper');

module.exports.login = function(req, res){
    const result = {status:false,redirectTo:''}
    const email = req.query.email;
    const password = req.query.password;
    const where = {'bio.email':email, password:password};
    LoginHelpers.authenticate(where ,function(err,user){
        if(err){
            console.log(err);
            return res.status(500).send();
            throw err;
        }
        if(!user){
            return res.status(404).send();
        }
        req.session.user = user;
        result.status = true;
        result.redirectTo = '/dashboard';
        res.json(result);
    });
}