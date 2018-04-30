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
            {
                question: newListObj.question1,
            },
            {
                question: newListObj.question2,
            },
            {
                question: newListObj.question3,
            },
            {
                question: newListObj.question4,
            },
            {
                question: newListObj.question5,
            },
            {
                question: newListObj.question6,
            },
            {
                question: newListObj.question7,
            },
            {
                question: newListObj.question8,
            },
            {
                question: newListObj.question9
            }
        ];

        for (var i = 0; i < friends.length; ++i) {
            var total = 0;
            for (var j = 0; j < userInput.length; ++j) {
                total += Math.abs(parseFloat(userInput[j].question) - parseFloat(friends[i].question[j]));
            }

            friends[i].total = total;
        }

        bestMatch = {
            name: friends[0].name,
            link: friends[0].imgURL,
            total: friends[0].total
        }

        for (var i = 0; i < friends.length; ++i) {
            for (var j = 1; j < friends.length; ++j) {

                if (parseInt(friends[j].total) < parseInt(bestMatch.total)) {
                    bestMatch = {
                        name: friends[j].name,
                        link: friends[j].imgURL,
                        total: friends[j].total
                    }
   
                }
            }
        }
    
        res.json(bestMatch);

    });
}