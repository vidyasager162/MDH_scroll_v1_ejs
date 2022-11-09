const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("home");
});

app.get("/login", function(req, res){
	res.render("login");
});

app.post("/", function(req, res){
	var uname = req.body.uname;
	var pwd = req.body.pwd;
	console.log("Username: " + uname);
	console.log("Password: " + pwd);
});

app.listen(3000, function(){
	console.log("Server has started on port 3000.");
});