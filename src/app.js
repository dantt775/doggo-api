const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const databaseUri = require('./database/databaseUri');
const adsRoutes = require('./routes/adsRoutes');

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



mongoose.connect(databaseUri, { useNewUrlParser: true });

// Default route
app.get('/', (req, res)=>{
  res.send('Please use /api/doggo');
});

// Ads Routes
adsRoutes.getAdsRoute(app);
adsRoutes.addAdsRoute(app);
adsRoutes.updateAdRoute(app);






app.listen(port, ()=>{
  console.log('\n| Magic happens at port '+port+' ._. |\n');
});