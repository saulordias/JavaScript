require('dotenv').config();

// Como utilizar Router e já fazer as aplicações de controller

const express = require('express');

const app = express();

const mongoose = require('mongoose');


// Mongoose - Conexão com o MongoDB
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
    console.log('Conectado ao MongoDB!');
    app.emit('pronto'); // Emitindo o evento 'pronto' quando a conexão for bem-sucedida
  })
  .catch(e => {
    console.log('Erro ao conectar ao MongoDB:', e);
  });

const session = require('express-session'); // Importando o express-session
const MongoStore = require('connect-mongo'); // Importando o connect-mongo
const flash = require('connect-flash'); // Importando o connect-flash para mensagens temporárias




const routes = require('./routes'); // Importando as rotas

const path = require('path');

const {middlewareGlobal} = require('./src/middlewares/middlewares');




app.use(express.urlencoded({ extended: true })); // Aqui estamos dizendo para o Express interpretar o body do formulário (req.body)

app.use(express.static(path.resolve(__dirname, 'public'))); // Definindo a pasta pública para arquivos estáticos (CSS, JS, imagens, etc.)


// Configurando o express-session para usar o MongoDB como store
const sessionOptions = session({
  secret: 'qualquercoisa',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());


app.set('views', path.resolve(__dirname, 'src', 'views')); // Definindo onde estão as views
app.set('view engine', 'ejs'); // Definindo a engine de template que vamos usar (EJS)


// Nossos próprios Middlewares
app.use(middlewareGlobal); // Usando o middleware global


app.use(routes); // Usando as rotas importadas


app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor rodando na porta 3000');// O servidor irá escutar na porta 3000 
  });
});

