const mongoose = require('mongoose');
const config = {
    autoIndex: false,
    useNewUrlParser: true,
  };
const porra = function(){

    
    
    const adSchema = new mongoose.Schema({
    id : String,
    user: String,
    local: String,
    descricao: String,
    titulo: String,
    data: String,
    img: String
  });
  
var ad = mongoose.model('Ad', adSchema);


var adTest = new ad({ 
    id : '5',
    user: 'Xander',
    local: 'SP - São Paulo',
    descricao: 'Anuncio Persistido via nodeJS',
    titulo: 'Anuncio teste de Persistencia',
    data: '07/10/2018',
    img: 'no-image'
});

mongoose.connect('mongodb://localhost/doggo',config);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Conectado ao banco com sucesso');
  
    /*
    adTest.save(function (err, adTest) {
        if (err) {
            return console.error(err);
        }else{
            return console.log('anuncio salvo com sucesso');
        }
      });
    */

    
  
});
}

module.exports = porra;

