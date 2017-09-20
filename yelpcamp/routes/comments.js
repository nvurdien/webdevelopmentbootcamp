var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comments");
var middlewareObj = require("../middleware")

router.get("/new", middlewareObj.isLoggedIn, function(req, res){
    var id = req.params.id;
    Campground.findById(id, function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            res.render("comments/new", {campground: foundCampground});
        }
    });
    
});

router.post("/", function(req, res){
    var id = req.params.id;
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            res.show("Campground not found");
        }
        else
        {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                }
                else{
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    console.log("New comment");
                    console.log(comment);
                    comment.save();
                    foundCampground.comments.push(comment);
                    foundCampground.save();
                    req.flash("success", "Successfully added your Comment!");
                    res.redirect("/campgrounds/"+id);
                }
            })
           
        }
});
});

router.get("/:comment_id/edit", middlewareObj.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment) {
        if(err){
            console.log(err);
        }
        else {
            res.render("comments/edit", {campground_id: req.params.id, comment:foundComment});
        }
    });
});

router.put("/:comment_id", middlewareObj.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, foundComment){
        if(err)
        {
            console.log(err);
            req.flash("error", "Something went wrong updating your Comment!");
            res.redirect("back");
        }
        else{
            req.flash("success", "Successfully updated your Comment!");
            res.redirect("/campgrounds/"+req.params.id);
        }
    });
});

router.delete("/:comment_id", middlewareObj.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if(err){
            console.log(err);
            req.flash("error", "Something went wrong removing your Comment!");
            res.redirect("back");
        }
        else{
            req.flash("success", "Successfully removed your Comment!");
            res.redirect("/campgrounds/"+req.params.id);
        }
    })
})

module.exports = router;