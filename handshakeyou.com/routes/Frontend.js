const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.render('home',{title:"Home | Handshake you"})
});

router.get('/home',(req, res)=>{
    res.render('home',{title:"Home | Handshake you"})
});

router.get('/login',(req, res)=>{
    res.render('login',{title:"Login | Handshake you"})
});

router.get('/register',(req, res)=>{
    res.render('auth/register',{title:"Register | Handshake you"});
});

router.get('/dashboard',(req, res)=>{
    res.setHeader('Content-Type','text/html');
    res.render('frontend/dashboard',{title:'Dashboard | Handshake you', user:req.session.user});
});

module.exports = router;