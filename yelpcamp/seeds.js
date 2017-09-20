var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comments")

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5115434.jpg", 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name:"Desert Mesa",
        image:"http://avaloncampground.com/wp-content/uploads/2013/07/Avalon-Campground-table-woods.png",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Canyon Floor",
        image: "https://www.nps.gov/zion/planyourvisit/images/South_CG_r_1.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
    ]

function seedDB(){
    //remove all campgrounds
Campground.remove({}, function(err){
    if(err)
    {
        console.log(err);
    }
    console.log("removed campgrounds!");
    data.forEach(function(seed){
    Campground.create(seed, function(err, campground){
        if(err){
            console.log(err);
        }
        else{
            console.log("added a campground");
            //create a comment
        }
    });
    });
});
//add campgrounds



}
module.exports = seedDB;