const express = require('express');

const route = express.Router(); // Criando uma instância do Router do Express

const homeCotroller = require('./src/controllers/homeController'); // Importando o controller

const contatoController = require('./src/controllers/contatoController'); // Importando o controller

/*
// exemplo de middleware
function meuMiddleware (req, res, next){
    req.session = {nome: 'Saulo', sobrenome: 'Dias'};

    console.log();
    console.log('Passei no seu Middleware')
    console.log();
    next();
    

};
*/

// ROTAS DA HOME

route.get('/', homeCotroller.paginaInicial);

route.post('/', homeCotroller.trataPost);


// ROTAS DE CONTATO

route.get('/contato', contatoController.paginaInicial);



module.exports = route; // Exportando as rotas para serem usadas no servidor

