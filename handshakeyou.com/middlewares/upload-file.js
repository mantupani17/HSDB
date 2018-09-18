var express = require('express')
const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null, 'public/uploads/');
    },
    filename: (req, file, callback)=>{
        callback(null, Date.now()+'-'+file.originalname);
    }
});

const upload = multer({storage: storage});

module.exports.fileUpload= (fileName)=>{
    console.log(fileName);
    var result = upload.single(fileName);
    return result;
}



