var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//post -title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);


//user - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    post: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "hermoine@hogwarts.edu",
//     name: "Hermoine Granger"
// });

// newUser.post.push({
//     title:"How to brew polyjuice potion",
//     content: "Just kidding. Go to potions class to learn it"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });


// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });

User.findOne({name: "Hermoine Granger"}, function(err, user){
    if(err){
        console.log(err);
    }
    else{
        user.post.push({
            title: "3 things i really hate",
            content: "Voldemort. Voldemort. Voldemort."
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            }
            else{
                console.log(user);
            }
        });
    }
})