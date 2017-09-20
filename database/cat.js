var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema  = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Norris",
//     age: 7,
//     temperament: "Evil"
// });
// george.save(function(err, cat){
//     if(err){
//         console.log("something went wrong");
//     }
//     else {
//         console.log("cat was saved");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow white",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    }
    else{
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("oh no, error");
        console.log(err);
    }
    else{
        console.log("all the cats");
        console.log(cats)
    }
})