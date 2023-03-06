var express = require('express');
 var router = express.Router();
 var http = require('../http')
//  let jwt = require('jsonwebtoken');
// const app = require('../app');
//  global.config = require('../config');
 
//  /* GET users listing. */
//  router.get('/', function (req, res, next) {
//  res.send('respond with a resource');
//  });
 
//  /* Post users Login. */
//  router.post('/login', function (req, res, next) {
//   let userdata = {
//   username: req.body.username,
//   password: req.body.password
//   };
  
//   //Go to server for user varificarion
//   if (userdata.username == "shashangka" && userdata.password == "12345") {
//   let token = jwt.sign(userdata, global.config.secretKey, {
//   algorithm: global.config.algorithm,
//   expiresIn: '1m'
//   });
  
//   res.status(200).json({
//   message: 'Login Successful',
//   token: token
//   });
//   }
//   else {
//   res.status(401).json({
//   message: 'Login Failed'
//   });
//   }
//   });

//   router.get('/login',taskToken,(req,res)=>{
//     jwt.verify(req.token,global.config.secretKey,(err,data)=>{
//       if(err){
//         res.sendStatus(403)
//       }
//       else{
//         res.json({
//           data:data
//         })
//       }
//     })
//   })
 

//   function taskToken(req,res,next){
//     const bearerHeader = req.headers["authorization"];
// if(typeof bearerHeader !== 'undefined'){
// const bearer = bearerHeader.split(" ");
// const bearerToken = bearer[1];
// req.token = bearerToken;
// next();
// }
// else{
// res.sendStatus(403);
// }

//   }


router.get('/api',(req,res)=>{
    http.data(req,res,function(data){

    })
})
 module.exports = router;