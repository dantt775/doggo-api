var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes.js");
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

funcaoTeste = () => {
  return 'app running on port';
}



var server = app.listen(3003, function () {
  console.log( funcaoTeste(), server.address().port);
});

