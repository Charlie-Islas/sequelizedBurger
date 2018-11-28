var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
var db=require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
//app.use('public/assets',express.static('assets'));
//app.use(express.static('views/images')); 

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/burgers_controller.js")(app);
// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

