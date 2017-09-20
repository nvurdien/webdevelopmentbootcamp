var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
    //res.send("Welcome to the home page!");
});

app.get("/fallinlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req,res){
    var posts = [
        {title:"post 1", author:"Susy"},
        {title:"post 2", author:"Charlie"},
        {title:"post 3", author:"Colt"}
        ];
    res.render("post", {posts:posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});