var friendsData = require("../data/friends");



module.exports = function(app) {

    app.get("/api/friends", function(req, res) {

        res.json(friendsData);

    });

    // Create New Friend - takes in JSON input
    app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware

  
    // Using a RegEx Pattern to remove spaces from newFriend
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //newFriend.routeName = newFriend.firstName.replace(/\s+/g, "").toLowerCase();
    if (friendsData.length < 200) {
        friendsData.push(req.body);
        res.json(true);
     }});

    };




/*Declare an empty array for the absolute difference between the new friend that has just been added
and each stored friend's scores question by question.*/
/*var mainComparison = [];

//Declare an empty array for the sum of each set of absolute differences for each friend to friend comparision.
var finalComparison = [];

//Create a function where the absolute differences are calculated and pushed to the mainComparision array.
function compareFriends() {

    for (i = 0; i < friendsArray.length; i++) {

        for (i = 0; i < scores.length; i++) {
            var difference = friendsArray.newFriend.scores[i] - friendsArray[i].scores[i];
            var absoluteDifference = Math.abs(difference);
            mainComparison.push(absoluteDifference);
        }
    };
};
compareFriends();

//Slice the main comparison array to isolate each individual friend's differences
function chunkArray(mainComparision, chunk_size) {
    var index = 0;
    var arrayLength = mainComparision.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;

}
// Split in groups of 10 items
var result = chunkArray(mainComparison, 10);
// Outputs
console.log(result);

const arrSum = result => result.reduce((a, b) => a + b, 0)
finalComparison.push(arrSum);

//return the index of the minimum value for the finalComparison
let i = finalComparison.indexOf(Math.min(...finalComparison));

//declare the variable for the perfect Match friend at the index defined above.
var perfectMatch = friendsArray[i];

return (perfectMatch);

console.log(perfectMatch);

res.json(perfectMatch);*/