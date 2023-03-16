var express = require('express');
var app = express();
var jwt = require('jsonwebtoken')

// app.get('/vinnu',jwtToken,(req,res)=>{
//  jwt.verify(req.token,'secret',(err,data)=>{
//          if(err){
//             res.sendStatus(403)
//          }
//          else{
//             res.json({
//                     data:data
//             })
//          }
//  })
// });

app.post('/vinnu',(req,res)=>{
    var user ={
        username:"vineetha",
        password:"vinnu@123"
    }
    var token = jwt.sign({user},'secret',{expiresIn:"30sec"});
    res.json({
        message:'This token was expired with in 30sec',
        token:token
    })
});

app.get('/vinnu',ensureToken,(req,res)=>{
    jwt.verify(req.token,'secret',(err,data)=>{
    if(err){
    res.sendStatus(403)
    }
    
    else{
    res.json({
    data:data
    });
    }
    });
    
    });
    
    function ensureToken(req,res,next){
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
    }
    else{
    res.sendStatus(403);
    }
    }


// app.listen(6000,console.log('server running at port 6000'))