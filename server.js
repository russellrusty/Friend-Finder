//NPM Packages 

var express = require("express");

var fs = require("fs");

var app = express();

//Port 

var PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes to be taken

require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

// Listner starts the server 

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

