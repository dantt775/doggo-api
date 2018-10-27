const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

Ad = require('./models/ad');

mongoose.connect('mongodb://localhost/doggo-db', { useNewUrlParser: true });
let db = mongoose.connection;

app.get('/', (req, res)=>{
  res.send('Please use /api/doggo');
});

app.get('/api/doggo/anuncios', (req, res)=>{
  Ad.getAds((err, ads)=>{
    if(err){
      throw err;
    }
    res.json(ads);
  })

})


app.listen(3001, ()=>{
  console.log('\n| Running on port 3001 |\n');
});