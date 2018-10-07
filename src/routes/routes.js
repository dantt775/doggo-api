const getAds = require('../service/service.js')


  var  adsEndpoint = function (app) {
    app.get("/anuncios", function (req, res) {   
    
        res.contentType('application/json');
        res.status(200).json(getAds());
  
    });
  }



module.exports = adsEndpoint;
