const express = require('express');

const route = express.Router(); // Criando uma instância do Router do Express

const homeCotroller = require('./controllers/homeController'); // Importando o controller

const contatoController = require('./controllers/contatoController'); // Importando o controller



// ROTAS DA HOME

route.get('/', homeCotroller.paginaInicial);
route.post('/', homeCotroller.trataPost);


// ROTAS DE CONTATO

route.get('/contato', contatoController.paginaInicial);



module.exports = route; // Exportando as rotas para serem usadas no servidor

