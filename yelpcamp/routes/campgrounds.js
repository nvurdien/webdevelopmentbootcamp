var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middlewareObj = require("../middleware")

router.get("/", function(req,res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/index", {campgrounds: allcampgrounds});
        }
    });
});


router.post("/", middlewareObj.isLoggedIn, function(req, res){
    // get data from form and add to campgrounds array
    //redirect back the campgrounds page
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCamp = {name: name, price:price, image:image, description: desc, author: author};
    Campground.create(newCamp, function(err, campground){
        if(err){
            console.log(err);
        }
        else{
            console.log("New Campground");
            console.log(campground);
            req.flash("success", "Successfully added your Campground!");
            res.redirect("/campgrounds");
        }
    });
});

router.get("/new", middlewareObj.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

router.get("/:id", function(req, res){
    var id = req.params.id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            res.show("Campground not found");
        }
        else
        {
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

router.get("/:id/edit", middlewareObj.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        res.render("campgrounds/edit", {campground: foundCampground});
    });
    
});

router.put("/:id", middlewareObj.checkCampgroundOwnership, function(req,res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        }
        else {
            res.redirect("/campgrounds/"+req.params.id);
        }
    });
});

router.delete("/:id", middlewareObj.checkCampgroundOwnership, function(req,res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;