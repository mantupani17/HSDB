const express = require('express');
const router = express.Router();
const GymController = require('../controllers/GymController');
// const authMw = require('../middlewares/AuthorizationMWares');
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'public/dps'); // set the destination
    },
    filename: function(req, file, callback){
        callback(null, Date.now()+'-'+file.originalname); // set the file name and extension
    }
});
var upload = multer({storage: storage});

router.post('/gym', (req, res)=>{
    GymController.addNewGym(req,res);
});

router.get('/gym-names',(req, res)=>{
    GymController.viewAllGymNames(req,res);
});

router.get('/gym', (req, res)=>{
    GymController.viewAllGym(req,res);
});

router.post('/upload-dp',upload.single('uploadpic'),(req, res)=>{
    var image = req.file.filename;
    req.body.banner = image;
    GymController.uploadDP(req, res);
});

router.get('/get-dp', (req, res)=>{
    GymController.getGymBanner(req,res);
});

router.get('/update-status', (req, res)=>{
    GymController.changeStatus(req, res);
})

module.exports = router;