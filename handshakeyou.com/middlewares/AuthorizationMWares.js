const auth = {}

auth.isLoggedUser = (req, res, next)=>{
    if(typeof req.session.user != 'undefined' && req.session.user != ''){
      console.log('User verified...');
      return next();
    }
    res.redirect('/');
}

auth.isUser = (req, res, next)=>{
    var user = req.session.user;
    var roles = user.roles;
    if(
      roles.indexOf('User') > -1 || 
      roles.indexOf('Admin') > -1 || 
      roles.indexOf('Trainer') > -1 || 
      roles.indexOf('SuperAdmin') > -1 || 
      roles.indexOf('Developer') > -1 ||
      roles.indexOf('Owner') > -1) 
      {
      console.log(roles);
      return next();
    }
    res.redirect('/');
}

auth.isOwner = (req, res, next)=>{
  var user = req.session.user;
  var roles = user.roles;
  if(
    roles.indexOf('Developer') > -1||
    roles.indexOf('Owner') > -1||
    roles.indexOf('SuperAdmin') > -1||
    roles.indexOf('Admin') > -1
  ){
    console.log(roles);
    return next();
  }
  res.redirect('/');
}

auth.isTrainer = (req, res, next)=>{
  var user = req.session.user;
  var roles = user.roles;
  if(
    roles.indexOf('Developer') > -1||
    roles.indexOf('Trainer') > -1||
    roles.indexOf('SuperAdmin') > -1||
    roles.indexOf('Admin') > -1
  ){
    console.log(roles);
    return next();
  }
  res.redirect('/');
}

auth.isOwner = (req, res, next)=>{
  var user = req.session.user;
  var roles = user.roles;
  if(
    roles.indexOf('Developer') > -1||
    roles.indexOf('Owner') > -1||
    roles.indexOf('SuperAdmin') > -1||
    roles.indexOf('Admin') > -1
  ){
    console.log(roles);
    return next();
  }
  res.redirect('/');
}

auth.isAdmin = (req, res, next)=>{
    var user = req.session.user;
    var roles = user.roles;
    if(
      roles.indexOf('Admin') > -1||
      roles.indexOf('SuperAdmin') > -1||
      roles.indexOf('Developer') > -1
    ){
      console.log(roles);
      return next();
    }
    res.redirect('/');
}

auth.isDeveloper = (req, res, next)=>{
  var user = req.session.user;
  var roles = user.roles;
  if(roles.indexOf('Developer') > -1){
      console.log(roles);
      return next();
  }
  res.redirect('/');
}

auth.isSuperAdmin = (req, res, next)=>{
  var user = req.session.user;
  var roles = user.roles;
  if(roles.indexOf('SuperAdmin') > -1){
      console.log(roles);
      return next();
  }
  res.redirect('/');
}



module.exports = auth;