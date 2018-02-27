//NPM setup
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Server and port
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================
require("./app/routing/apiRoutes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routing/htmlRoutes.js")(app);

//simplifies path stuffs
app.use('/app', express.static(path.join(__dirname, 'app')));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  