const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const databaseUri = require('./database/databaseUri')


let port = process.env.PORT || 8080;


//  MW's
app.use(cors());
app.use(bodyParser.json());

/*
app.use(
  (req,res,next) =>{
    console.log('Via Header: ', typeof req.headers.token)

    if(req.headers.token === '12345'){
      console.log('igual');
      next();
    }else{
      console.log('não é igual');
      res.status(401).send('Token Inválido');
    }

    
  }
);
*/

Ad = require('./models/ad');

mongoose.connect(databaseUri, { useNewUrlParser: true });
//let db = mongoose.connection;

app.get('/', (req, res)=>{
  res.send('Please use /api/doggo');
});

// Get ads
app.get('/api/doggo/anuncios', (req, res)=>{
  Ad.getAds((err, ads)=>{
    if(err){
      throw err;
    }
    res.json(ads);
  })

})

// Add ads
app.post('/api/doggo/anuncios', (req, res)=>{
  var ad = req.body;
  Ad.addAd(ad, (err, ad)=>{
    if(err){
      throw err;
    }
    res.json(ad);
  })

})

// Update ad
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


app.listen(port, ()=>{
  console.log('\n| Magic happens at port '+port+' ._. |\n');
});