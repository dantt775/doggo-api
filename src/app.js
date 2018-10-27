const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

Ad = require('./models/ad');

mongoose.connect('mongodb://doggo-db:doggo-db123@ds143603.mlab.com:43603/doggo-db', { useNewUrlParser: true });
let db = mongoose.connection;

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


app.listen(3001, ()=>{
  console.log('\n| Running on port 3001 |\n');
});