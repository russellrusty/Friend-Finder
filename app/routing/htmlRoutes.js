
// Required dependancy package

var path = require("path");

module.exports = function (app) {

    // HTML GET Requests

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // If no matching route is found, app should redirect to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

};