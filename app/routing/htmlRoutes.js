var path = require("path");

module.exports = function(app) {

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    var perfectMatch = req.body;
    console.log(perfectMatch);
});

app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    friendsArray.push(newFriend);
    res.json(true);
});

/*app.post("/survey", function(req, res) {
    var perfectMatch = req.body;
    console.log(perfectMatch);
    res.json(true);*/

};