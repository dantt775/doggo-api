var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var compression = require('compression')
var app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3003, function () {
  console.log("app running on port.", server.address().port);
});

