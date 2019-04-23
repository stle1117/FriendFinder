var newFriend = require("../routing/apiRoutes")

var friendsArray = [

    {
        firstName: "Leeloo",
        lastName: "Perfect",
        photo: "http://musingsfromus.com/wp-content/uploads/2011/12/The-Fifth-Element-1997-ScreenShot-56.jpg",
        scores: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ],
    },
    {
        firstName: "Don Juan",
        lastName: "Demarko",
        photo: "http://www.deppimpact.com/gallery/albums/pub_djd/djdcape.jpg",
        scores: [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ],
    },

    {
        firstName: "Tesla",
        lastName: "Testing",
        photo: "http://www.deppimpact.com/gallery/albums/pub_djd/djdcape.jpg",
        scores: [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ],
    },
];

friendsArray.push(newFriend);

/*Declare an empty array for the absolute difference between the new friend that has just been added
and each stored friend's scores question by question.*/
var mainComparison = [];

//Declare an empty array for the sum of each set of absolute differences for each friend to friend comparision.
var finalComparison = [];

compareFriends();
//Create a function where the absolute differences are calculated and pushed to the mainComparision array.
function compareFriends() {

    var i;
    for (i = 0; i<friendsArray[i].length; i++) {

        for (i = 0; i<friendsArray[i].results.length; i++) {

            stringToNum();

            var friendScores = (friendsArray[i].results);
            
            var difference = (friendsArray[friendsArray.length-1].newFriendScores) - friendScores;
            var absoluteDifference = Math.abs(difference);
            mainComparison.push(absoluteDifference);

        }

    };  

function stringToNum() {
    var i;
    for (i = 0; i < 9; i++) {
        var newFriendScores = parseInt("newFriend.scores[i]");
        return newFriendScores;
        };
    };


//Slice the main comparison array to isolate each individual friend's differences
function chunkArray(mainComparision, chunk_size) {
    var index = 0;
    var arrayLength = mainComparision.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = mainComparision.slice(index, index + chunk_size);
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
let x = finalComparison.indexOf(Math.min(...finalComparison));

var i = x;
//declare the variable for the perfect Match friend at the index defined above.
var perfectMatch = friendsArray[i];

//return (perfectMatch);

console.log(perfectMatch);

};


module.exports = friendsArray;
