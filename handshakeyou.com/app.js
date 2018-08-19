var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var cookieparser = require('cookie-parser')
var mongoose = require('mongoose');
var path = require('path');
var session = require('express-session');


// custom router mounting
const pagesRouter = require('./routes/Frontend');
const usersRouter = require('./routes/User');
const authoriseRouter = require('./routes/Auth');

// set view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));


// body-parser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));       
app.use(cookieparser());
app.use(session({secret:'abc123jakjakaa098',resave:false,saveUninitialized:true}))


// set static path
app.use(express.static(path.join(__dirname, 'public')));


// mounting router
app.use('/',pagesRouter);
app.use('/users',usersRouter);
app.use('/authorize', authoriseRouter);

// connect to DB
mongoose.connect('mongodb://localhost/HSDB');
var db = mongoose.connection;


app.listen(3000);
console.log('running on 3000');