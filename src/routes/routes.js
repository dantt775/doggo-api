const getAds = require('../service/service.js')
const db = require('../db/db.js')

exports.insertAds = function (app) {
  app.get("/insert", function (req, res) {

    
    res.send("Texto");

  });
}

exports.returnAds = function (app) {
    app.get("/anuncios", function (req, res) { 
      
      
        db();
    
        res.contentType('application/json');

        res.status(200).json(getAds());
  
    });
  }




