var express = require("express");

var app = express();

// "/" ->  "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});
// "/bye" => "goodbye!"
app.get("/bye", function(req, res){
   res.send("Goodbye!"); 
});
// "/dog" => "Meow!"
app.get("/dog", function(req, res){
   res.send("MEOW!"); 
});

app.get("*", function(req, res){
   res.send("You are a star"); 
});

//Tell express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});