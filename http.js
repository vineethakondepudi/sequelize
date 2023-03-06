// var http = require('http');
// var data = (req,res)=>{
//     http.createServer()
//     {
//         res.send('Hello world')
//     }
// }
// module.exports = {data}
//             res.send({          
//             "code":400,          
//             "failed":"error occurred",          
//             "error" : err      
//             })      
//             }else{        
//             if(data.length >0){          
//             const comparison = await bcrypt.compare(password, data[0].password)  
//             console.log(data);        
//             if(comparison){  
//                 const token=jwt.sign(user, 'my_secret_key',{expiresIn:"40m"});
//             res.json({
//             token:token
//             });            
//             res.send({                
//             "code":200,                
//             "success":"login successful",                            
//             })          
//             }else{            
//             res.send({                 
//             "code":204,                 
//             "error":"username and password does not match"            
//             })          
//             }        
//             } else{          
//             res.send({            
//             "code":206,            
//             "error":"username does not exist"              
//             });        
//             }      
//             }      
//             });  }



// var tdata= (req, res, next) => {
//     db.query(
//     "SELECT * FROM login WHERE username = '"+req.body.username+"'",
//     (err, results) => {
//     if (err) {
//     throw err;
//     return res.status(400).send({
//     msg: err,
//     });
//     }
//     if (!results.length) {
//     return res.status(401).send({
//     msg: "Email or password is incorrect!",
//     });
//     }
//     // check password
//     bcrypt.compare(
//     req.body.password,
//     results[0]["password"],
//     (bErr, bResult) => {
//     // wrong password
//     if (bErr) {
//     throw bErr;
//     return res.status(401).send({
//     msg: "Email or password is incorrect!",
//     });
//     }
//     if (bResult) {
    
//     const user = {
//     username: req.body.username,
//     password: req.body.password,
//     };
    
//     const token = jwt.sign(
//     user,
//     "secretkey",
//     { expiresIn: "60s" }
//     );
    
//     return res.status(200).send({
//     msg: "Logged in!",
//     token,
//     user: results[0],
//     });
//     }
//     return res.status(401).send({
//     msg: "Username or password is incorrect!",
//     });
//     }
//     );
//     }
//     );
//     };