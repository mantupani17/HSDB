const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

router.get('/api/users', (req, res)=>{
    UsersController.getAllUsers(req, res);
});

router.get('/api/trainers',(req, res)=>{
    UsersController.getAllTrainers(req, res);
})

// adding user by admin
router.post('/admin/users',(req, res)=>{

});


// self register
router.post('/api/register/user',(req, res)=>{
    UsersController.addNewUser(req, res);
});

router.get('/api/owners', (req, res)=>{
    UsersController.getAllOwners(req, res);
});

router.post('/create-admin', (req, res)=>{
    UsersController.createAdmin(req, res);
})


module.exports = router;
