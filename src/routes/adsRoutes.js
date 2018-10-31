Ad = require('..//models/ad');

// Get ads
module.exports.getAdsRoute = (app) => {
app.get('/api/doggo/anuncios', (req, res)=>{
    Ad.getAds((err, ads)=>{
      if(err){
        throw err;
      }
      res.json(ads);
    })
  
  })
}

  // Add ads
  module.exports.addAdsRoute = (app) => {
  app.post('/api/doggo/anuncios', (req, res)=>{
    var ad = req.body;
    Ad.addAd(ad, (err, ad)=>{
      if(err){
        throw err;
      }
      res.json(ad);
    })
  
  })
}

  // Update ad
  module.exports.updateAdRoute = (app) => {
  app.put('/api/doggo/anuncios/:id', (req, res)=>{
    var adId = req.params.id;
    var updatedAd = req.body;
    Ad.updateAd(adId, updatedAd, (err, ad)=>{
      if(err){
        throw err;
      }
      res.json(updatedAd);
    })
  
  })
}