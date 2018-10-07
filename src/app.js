const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression')
const app = express();


const routes = require("./routes/routes.js");

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.insertAds(app);
routes.returnAds(app);

var server = app.listen(3003, function () {
  console.log("app running on port.", server.address().port);
});

