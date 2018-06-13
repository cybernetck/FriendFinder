var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends/", function (req, res) {

        res.json(friends);

    });

    app.post("/api/friends/", function (req, res) {
        
        var newListObj = req.body;

        var bestMatch = {
            name: '',
            imgURL: '',
            difference: 0
        };

        var userInput = [
            
            newListObj.question1,
            newListObj.question2,
            newListObj.question3,
            newListObj.question4,
            newListObj.question5,
            newListObj.question6,
            newListObj.question7,
            newListObj.question8,
            newListObj.question9
            
        ];

        for (var i = 0; i < friends.length; ++i) {
            var total = 0;
            for (var j = 0; j < userInput.length; ++j) {
                total += Math.abs(parseFloat(userInput[j]) - parseFloat(friends[i].question[j]));
            }

            friends[i].total = total;
        }

        bestMatch = {
            name: friends[0].name,
            link: friends[0].imgURL,
            total: friends[0].total
        }

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

        friends.sort(function(a, b){
           return a.total - b.total;
        });
        
        bestMatch = friends[0];

        res.json(bestMatch);

    });
}