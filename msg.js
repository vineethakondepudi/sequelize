var express = require('express');
var twilio = require('twilio');
var dotenv = require('dotenv')
var app = express();
dotenv.config()

async function sendSMS(){
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN)

    return client.messages
    // client.messages
  .create({ body: "https://youtu.be/df6QK51leZE", from: "+12766183796", to: "+919182562841" })
  .then(message => console.log(message.sid))
    .catch(err=>{
        console.log(err,"msg not sent")
    })
}
sendSMS()
app.get('/msg',(req,res)=>{
    res.send("Hello")
})
// app.listen(5000,console.log("port 5000"))