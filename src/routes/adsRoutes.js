Ad = require('../models/ad');

// Get ads
module.exports.getAdsRoute = (app) => {
  app.get('/api/doggo/anuncios', (req, res) => {
    Ad.getAds((err, ads) => {
      if (err) {
        res.json(err);
      } else {
        res.json(ads);
      }
    })
  })
}

// Get Ads by user
module.exports.getAdsByUserRoute = (app) => {
  app.get('/api/doggo/anuncios/usuario/:id', (req, res)=> {
    let userId = req.params.id;
    Ad.getAdsByUderId(userId, (err, ads)=>{
      if(err){
        res.json(err);
      }else{
        res.json(ads);
      }
    })
  })
}

// Add ads
module.exports.addAdsRoute = (app) => {
  app.post('/api/doggo/anuncios', (req, res) => {
    let ad = req.body;
    usAd.addAd(ad, (err, ad) => {
      if (err) {
        res.json(err);
      } else {
        res.json(ad);
      }
    })

  })
}

// Update ad
module.exports.updateAdRoute = (app) => {
  app.put('/api/doggo/anuncios/:id', (req, res) => {
    let adId = req.params.id;
    let updatedAd = req.body;
    Ad.updateAd(adId, updatedAd, (err, ad) => {
      if (err) {
        res.json(err);
      } else {
        res.json(updatedAd);
      }
    })

  })
}