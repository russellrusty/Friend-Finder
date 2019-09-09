//Requiring the Path to be taken to ensure correct file is chosen

var path = require("path");

//Routes to be taken

module.exports = function(app) {
    app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    });

//if no route is found it shall default to home 

    app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    });
};

