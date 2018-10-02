
 module.exports = insereAnuncio = function (app) {
    app.get("/insert", function (req, res) {

      
      res.send("Texto");
  
    });
  }


  module.exports =  retornaAnuncios = function (app) {
    app.get("/anuncios", function (req, res) {
    let anuncioArr =  [
            {
                'user': 'Daniel',
                'local': 'Osasco - São Paulo',
                'descricao': 'Esse é um anuncio de testes',
                'titulo': 'ANUNCIO TESTE - 1',
                'data': ''
            },
            {
                'user': 'Daniel',
                'local': 'São Paulo - São Paulo',
                'descricao': 'Esse é um anuncio de testes 2',
                'titulo': 'ANUNCIO TESTE - 2',
                'data': '10/05/2018'
            },
            {
                'user': 'José',
                'local': 'Paraíba - João Pessoa',
                'descricao': 'Esse é um anuncio de testes 3',
                'titulo': 'ANUNCIO TESTE - 3',
                'data': '15/12/1992'
            },
            {
                'user': 'Diego',
                'local': 'Barueri - Alphaville',
                'descricao': 'Esse é um anuncio de testes 4',
                'titulo': 'ANUNCIO TESTE - 4',
                'data': '01/01/2018'
            },


        ]
        res.contentType('application/json');
        res.status(200).json(anuncioArr);
  
    });
  }

  
