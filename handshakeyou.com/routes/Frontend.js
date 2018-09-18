const express = require('express');
const router = express.Router();
const auth = require('../middlewares/AuthorizationMWares');

router.get('/',(req, res)=>{
    res.render('home',{title:"Home | Handshake you"});
});


router.get('/home',(req, res)=>{
    res.render('home',{title:"Home | Handshake you",user:req.session.user});
});

router.get('/trainers',(req, res)=>{
    res.render('frontend/trainers',{title:"Trainers | Handshake you",user:req.session.user});
})

router.get('/gyms',(req, res)=>{
    res.render('frontend/gyms',{title:"Gyms | Handshake you",user:req.session.user});
})

router.get('/about',(req, res)=>{
    res.render('frontend/about',{title:"About us | Handshake you",user:req.session.user})
})

router.get('/trainer-details',(req, res)=>{
    res.render('frontend/trainer-details',{title:"Trainer Details | Handshake you",user:req.session.user})
})

// admin related dashboard things
router.get('/add-gym',auth.isLoggedUser, auth.isAdmin, (req, res)=>{
    res.render('auth/add-gym', {title:"Gym Registration | Handshake you",user:req.session.user})
});

// user related dashboard things
router.get('/dashboard/course-detail',(req, res)=>{
    res.render('user-info/course-card',{title:'My Course Card | Handshake you',user:req.session.user});
});

router.get('/dashboard/diet-chart',(req, res)=>{
    res.render('user-info/diet-chart',{title:'My Diet Chart | Handshake you',user:req.session.user});
});

router.get('/dashboard/bmi-chart',(req, res)=>{
    res.render('user-info/bmi',{title:'My BMI Chart | Handshake you',user:req.session.user});
});

// dashboard end

router.get('/events',(req, res)=>{
    res.render('frontend/events',{title:"Events | Handshake you",user:req.session.user})
})

router.get('/blogs',(req, res)=>{
    res.render('frontend/blogs',{title:"Blogs | Handshake you",user:req.session.user})
})

router.get('/classes',(req, res)=>{
    res.render('frontend/classes',{title:"Events | Handshake you",user:req.session.user})
})

router.get('/contact',(req, res)=>{
    res.render('frontend/contact',{title:"Contact us | Handshake you",user:req.session.user })
})

router.get('/login',(req, res)=>{
    res.render('login',{title:"Login | Handshake you"})
});

router.get('/register',(req, res)=>{
    res.render('auth/register',{title:"Register | Handshake you",user:req.session.user});
});

router.get('/dashboard',(req, res)=>{
    res.setHeader('Content-Type','text/html');
    res.render('frontend/dashboard',{title:'Dashboard | Handshake you', user:req.session.user});
});


module.exports = router;