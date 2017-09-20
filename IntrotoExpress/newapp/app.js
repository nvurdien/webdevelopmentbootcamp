var express = require("express");
var app = express();

// "/" should print "Hi there, welcome to my assignment"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
})

// "/speak/pig" should print "The pig says oink"
// "/speak/cow" should print "The cow says Moo"
// "/speak/dog" should print "The dog says woof"
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "Meow",
        goldfish: "..."
    }
    var sound = sounds[animal.toLowerCase()];
    res.send("The "+ animal+ " says \""+ sound+"\"");
})


// "/repeat/hello/3" should print hello hello hello
// "/repeat/hello/5" should print hello hello hello hello hello
// "/repeat/blah/2" should print blah blah

app.get("/repeat/:word/:times", function(req, res){
    var word = req.params.word;
    var times = req.params.times;
    var phrase = "";
    for(var i = 0; i < times; i++)
    {
        phrase += word;
        phrase += " ";
    }
    res.send(phrase);
})

// "*" prints "sorry, page not found .. what are you doing with your life?"
app.get("*", function(req, res){
    res.send("sorry, page not found .. what are you doing with your life?");
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});