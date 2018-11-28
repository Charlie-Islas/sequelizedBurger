var express=require("express");
var router=express.Router();
var db = require("../models");

module.exports=function(app){

  app.get("/", function(req, res) {
    console.log("entra a cargar todo");
    db.burger.findAll({}).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers",function(req,res){
    console.log(req.body);
    db.burger.create({
      burger_name:req.body.name,
      devoured:false
    }).then(function(){
      res.redirect("/");
    });
  });
  
};



