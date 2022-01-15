const express = require("express");
const os = require("os");
const path = require("path");
const fs = require("fs");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const nodeMail = require("nodemailer");
const app = express();
const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log("started");
app.use(bodyParser.urlencoded( {extended : true} ));
});
mongoose.connect('mongodb://localhost:27017/meme', {useNewUrlParser : true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, "error"));
db.once('open', ()=>{
    console.log("Connected!");
});
var signupStruc = new mongoose.Schema({
    name : String,
    email : String,
    number : String,
    password : String
});
var mailSender  = nodeMail.createTransport({
    host : "smtp.gmail.com",
    port :587,
    secure : false,  // Depending on http or https
    requireTLS : true,
    auth : {
        user : "educationalmirchi@gmail.com",
        pass : "Shaguftanaz@123"
    }
});
var signup = mongoose.model("signup", signupStruc);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
});

app.get("/submit", (req, res) => {
    var a = req.url;
    var name = a.replace("/submit?name=", "");
    console.log(name);
    var b = name.indexOf("&");
    console.log(b);

    name = name.substring(0, b);
    console.log(name);
    var email = a.replace("/submit?name="+name+"&email=", "");
    var c = email.indexOf("&");
    email = email.substring(0, c);
    email = email.replace("%40", "@");
    console.log(email);
    var number = a;
    var email1 = email.replace("@", "%40");
    number = number.replace("/submit?name="+name+"&email="+email1+"&number=", "");
    var e = number.indexOf("&");
    number = number.substring(0, e);
    console.log(number);
    var password = a;
    password = password.replace("/submit?name="+name+"&email="+email1+"&number="+number+"&password=", "");
    var f = password.indexOf("&");
    password = password.substring(0, f);
    console.log(password);
    var arr = new Array();
    name = name+"";
    email = email+"";
    number = number+"";
    password = password+"";
    arr = {"name" : name, "email" : email, "number" : number, "password": password};
    var g = new signup(arr);
    console.log(g);
    g.save();
    var ran = Math.random()*9000 + 1000;
    ran = ran.toFixed(0);
    var mailOp = {
        from : "educationalmirchi@gmail.com",
        to : email,
        subject : "O.T.P Verification For Programmer's Meme",
        text:ran
    }
    mailSender.sendMail(mailOp, (err, inf) => {
           if(err) {
            console.log("nah", err);
           }
           else {
               res.redirect("/login");
            
           }
    });
});
app.get("/login", (req, res) => {
    res.sendFile(__dirname+"/public/login.html");
});
app.get("/loginDashboard", (req, res) => {
    var a = req.url;
    console.log(a);
    a = a.replace("/loginDashboard?email=", "");
    var b = a.indexOf("&");
    var email = a.substring(0, b);
    email = email.replace("%40", "@");
    console.log(email);
    var password = req.url;
    var email1 = email.replace("@", "%40");
    password = password.replace("/loginDashboard?email="+email1+"&password=", "");
    signup.find({ email : email, password : password}, (err, user) => {
        if(user.length>0) {
            email = ""+email;
            password = ""+password;
           fs.writeFileSync("email.txt", email);
           fs.writeFileSync("password.txt", password);
           console.log("yes");
           res.redirect("http://127.0.0.1/dashboard");
        }
        else {
            res.end(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <link rel="stylesheet" href="CSS/style.css">
                <script src="JS/app.js"></script>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <div id="container">
                    <form action="/loginDashboard" method="get" style="height:350px;">
                        <aa>Login Now</aa>
                        <!-- <input name="name" id="input1"  type="text" placeholder="Your Boring Name.." required> -->
                        <input name="email"  id="input2" type="Email" style="top: 120px;" placeholder="Your Fake Email.." required>
                        <!-- <input name="number" id="input3"  type="number" placeholder="The Number Which I Blocked" required> -->
                        <input name="password" id="input4"  style="top: 190px;" type="password" placeholder="Your Weak Password.." required>
                        <!-- <input id="input5" name="repassword" type="password" placeholder="Repeat Your Password Noob" required> -->
                        <button id="btn" type="submit">Go You Shi*</button>
                    </form>
                </div>
                <script>alert("No User Found With Provided Email");</script>
            </body>
            </html>`)
        }
    });

});
app.get("/dashboard", (req, res) => {
    res.sendFile(__dirname+"/public/dashboard.html");
});