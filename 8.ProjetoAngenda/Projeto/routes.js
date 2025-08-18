const express = require('express');
const route = express.Router(); // Criando uma instância do Router do Express
const homeCotroller = require('./src/controllers/homeController'); // Importando o controller
const loginController = require('./src/controllers/loginController');


// ROTAS DA HOME
route.get('/', homeCotroller.index);

// Rotas de Login
route.get('/login/index', loginController.index)
route.post('/login/register', loginController.register)


module.exports = route; // Exportando as rotas para serem usadas no servidor

