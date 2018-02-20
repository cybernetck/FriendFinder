//NPM setup
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

// Routes
// =============================================================
require("./app/routing/apiRoutes.js");

// Here we introduce HTML routing to serve different HTML files
require("./app/routing/htmlRoutes.js");

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  