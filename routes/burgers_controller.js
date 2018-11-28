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
    }).then(function(burger){
      res.redirect("/");
    });
  });

  app.put("/api/burgers/:id",function(req,res){
    console.log("entra a modificar el devoured");
    console.log("id: "+req.params.id);
    db.burger.update({devoured:true},
      {
        where:{
          id:req.params.id
        }
      }).then(function(dbBurger){
        console.log("paso el update");
        res.json(dbBurger);
      });
  });
  
};

