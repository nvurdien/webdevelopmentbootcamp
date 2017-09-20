var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

var friends = ["tony", "miranda", "justin", "pierre", "lilly"];

app.get("/", function(req, res){
    res.render("home");
    //res.send("Welcome to the home page!");
});


app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
    //res.send("Welcome to the home page!");
});

app.post("/addFriend", function(req, res){
    friends.push(req.body.newfriend);
    res.redirect("/friends");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});