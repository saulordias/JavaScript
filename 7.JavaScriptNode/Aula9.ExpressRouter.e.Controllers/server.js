// Como utilizar Router e já fazer as aplicações de controller

 const express = require('express');

const app = express();

const routes = require('./routes'); // Importando as rotas


app.use(express.urlencoded({ extended: true })); // Aqui estamos dizendo para o Express interpretar o body do formulário (req.body)
app.use(routes); // Usando as rotas importadas




app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor rodando na porta 3000');

}); // O servidor irá escutar na porta 3000