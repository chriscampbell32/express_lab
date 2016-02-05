var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var PORT =8080;


//this is the bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false}));

app.get("/home", function(req, res){
    res.sendFile(process.cwd() + "/home.html");
});

app.get("/", function(req, res){
    res.sendFile(process.cwd() + "/login.html");
});

app.get("/account", function(req, res){
    res.sendFile(process.cwd() + "/account.html");
});

app.get("/help", function(req, res){
    res.sendFile(process.cwd() + "/help.html");
});

app.post("/login", function(req, res){
    //check to make sure they are an authenticated user
    //if they are, 
    var email = req.body.email;
    var password = req.body.password;
    if (req.body.email === email && req.body.password === password){
         res.redirect("/account");
    } else{
    res.redirect("/login");
    }
});

app.listen(PORT, function(){
    console.log("App listening on port %s", PORT);
});