var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");

// User.findOne({email:"Bob@gmail.com"}).populate("post").exec(function(err, user){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });

Post.create({
    title: "How to cook the best burgers pt4",
    content: "asdfasdfasd"
}, function(err, post){
    User.findOne({email:"Bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        }
        else{
            foundUser.post.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                }
            })
        }
    })
});

// User.create({
//     email: "Bob@gmail.com",
//     name: "Bob Belcher "
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




// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });
