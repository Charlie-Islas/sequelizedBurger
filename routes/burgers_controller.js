var db = require("../models");

module.exports=function(app){

  app.get("/", function(req, res) {
    db.burger.findAll({}).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });
  
  
};

