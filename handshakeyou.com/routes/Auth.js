const express = require('express');
const router = express.Router();
const AuthorizeController = require('../controllers/AuthController');

router.get('/login',function(req, res){
    AuthorizeController.login(req, res);
})

router.get('/logout', function(req, res){
    req.session.destroy();
    return res.redirect('/');

})

module.exports = router;