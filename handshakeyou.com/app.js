var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var cookieparser = require('cookie-parser')
var mongoose = require('mongoose');
var path = require('path');
var session = require('express-session');

// constant variables
var constants = require('./config/environment-config');

// custom router mounting
const pagesRouter = require('./routes/Frontend');
const usersRouter = require('./routes/User');
const authoriseRouter = require('./routes/Auth');
const gymRouter = require('./routes/Gym');



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

// custom middleware mounting
// app.use(authMiddlewares);

// mounting router
app.use('/',pagesRouter);
app.use('/users',usersRouter);
app.use('/authorize', authoriseRouter);
app.use('/gymapi', gymRouter);

// connect to DB
mongoose.connect(constants.DBPATH);
var db = mongoose.connection;


app.listen(constants.PORT);
console.log('running on 3000');