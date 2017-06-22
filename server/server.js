var users = require('./ownModules/users');
var courses = require('./ownModules/courses');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('./ownModules/dbconfig');
var db = mongojs.connect;
var header=function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
};

app.use(header);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8888);
  console.log('run port 8888');

  app.get('/',function(req,res){
  console.log('insertData')
  db.users.count(function (err,result) {
    console.log(result);
    if (result <= 0){
      db.users.insert(users.findAll(),function(err,data){
          console.log(data);
      });
    }

  });
  db.courses.count(function (err,result) {
      console.log(result);
    if (result <= 0){
      db.courses.insert(courses.findAll(),function(err,data){
          console.log(data);
      });
    }

  });
  res.send({resultCode:1,message:'Success'});
  //res.sendFile('index.html');
});

app.get('/user',function(req,res){
    db.users.find(function(err,docs){
      console.log(docs);
      if(docs == null){
        response = {resultCode:0,message:'Unsuccess'};
      }else {
        console.log(docs);
          response = {resultCode:1,message:'Success',users:docs};
      }
      return res.send(response);
    });
});

app.post('/checklogin',function(req,res){
  console.log('checklogin');
  console.log(req.body);
  var param = req.body;
  var response = {};
  db.users.findOne({userName:param.userName,password:param.password},function(err,docs){
    if(docs == null){
      response = {resultCode:0,message:'User Not Found'};
    }else {
        response = {resultCode:1,message:'Success',user:docs};
    }
    return res.send(response);

  });

});

app.post('/registeruser',function(req,res){

  console.log('registeruser');
    console.log(req.body);
    var param = req.body;
    var response = {};
    var obj ={
      firstName:param.firstName,
      lastName:param.lastName,
      nickName:param.nickName,
      birthday:param.birthday,
      gender:param.gender,
      userName:param.userName,
      password:param.password,
      role:param.role
    };
    db.users.insert(obj,function(err,docs){
      if(docs == null){
        response = {resultCode:0,message:'Unsuccess'};
      }else {
        console.log(docs);
          response = {resultCode:1,message:'Success'};
      }
      return res.send(response);

    });

});

app.post('/addcourse',function(req,res){
  console.log('addcourses');
  console.log(req.body);
  var param = req.body;
  var response = {};
  var obj ={
    courseName: param.courseName,
    description: param.description,
    category:param.category,
    subject:param.subject,
    time:param.time,
    userName:param.userName,
    maxStudent:param.maxStudent,
    currentStudent:param.currentStudent,
    courseStatus:param.courseStatus
  };
  db.courses.insert(obj,function(err,docs){
    if(docs == null){
      response = {resultCode:0,message:'Unsuccess'};
    }else {
      console.log(docs);
        response = {resultCode:1,message:'Success'};
    }
    return res.send(response);

  });
});

app.post('/updateprofile',function(req,res){
    console.log('updateprofile');
    console.log(req.body);
    var param = req.body;
    var response = {};

    var query = {query: { userName: param.userName },
    update: { $set:{firstName:param.firstName,lastName:param.lastName,nickName:param.nickName,birthday:param.birthday,gender:param.gender} },
    }

    db.users.findAndModify(query,function(err,docs){
      if(docs == null){
        console.log(docs);
        response = {resultCode:0,message:'Unsuccess'};
      }else {
          response = {resultCode:1,message:'Success'};
      }
      return res.send(response);

    });

  });

  app.post('/searchcoursesname',function(req,res){
  console.log('searchcoursesname');
  console.log(req.body);
  var param = req.body;
  var response = {};
  var query = {};
  if(param.role == 'student'){
    query = {courseName:{$regex:param.courseName}};
  }else {
    query = {userName:param.userName,courseName:{$regex:param.courseName}};
  }
  db.courses.find(query,function(err,docs){
    if(docs.length == 0){
      response = {resultCode:0,message:'Courses Not Found'};
    }else {
        response = {resultCode:1,message:'Success',courses:docs};
    }
    return res.send(response);

  });

});

app.post('/searchcoursestime',function(req,res){
console.log('searchcoursestime');
console.log(req.body);
var param = req.body;
var response = {};
var query = {};
if(param.role == 'student'){
  query = {time:param.time};
}else {
  query = {userName:param.userName,time:param.time};
}
db.courses.find(query,function(err,docs){
  if(docs.length == 0){
    response = {resultCode:0,message:'Courses Not Found'};
  }else {
      response = {resultCode:1,message:'Success',courses:docs};
  }
  return res.send(response);

});
});
