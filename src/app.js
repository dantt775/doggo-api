const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const databaseUri = require('./database/databaseUri');
const adsRoutes = require('./routes/adsRoutes');
const usersRoutes = require('./routes/usersRoutes');

const port = process.env.PORT || 3001;


//  MW's
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('| Url chamada: ', req.url);
  next();
})

// DB connect and sets
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(databaseUri, { useNewUrlParser: true });


// Ads Routes
adsRoutes.getAdsRoute(app);
adsRoutes.addAdsRoute(app);
adsRoutes.updateAdRoute(app);
adsRoutes.getAdsByUserRoute(app);
adsRoutes.getAdsByIdRoute(app);
// User Routes
usersRoutes.getUsersRoute(app);
usersRoutes.addUserRoute(app);
usersRoutes.updateUserRoute(app);
usersRoutes.getUserByIdRoute(app);
//Login
usersRoutes.login(app);


app.listen(port, () => {
  console.log('\n| Magic happens at port :) ' + port + ' ._. |\n');
});

