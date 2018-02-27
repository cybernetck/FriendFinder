var Friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends/", function(req, res) {

        res.json(Friends);

    });

    app.post("/api/friends"), function(req, res) {
        var newListObj = req.body;
        console.log(newListObj);
    }
}