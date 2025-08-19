require('dotenv').config(); // Carregando as variáveis de ambiente do arquivo .env

// Como utilizar Router e já fazer as aplicações de controller

const express = require('express'); // Importando o Express

const app = express(); // Criando uma instância do Express

const mongoose = require('mongoose'); // Importando o Mongoose para conexão com o MongoDB


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

const path = require('path'); // Importando o path para manipulação de caminhos de arquivos

const helmet = require('helmet'); // Importando o helmet para proteger as aplicações

const csrf = require('csurf'); // Importando o csrf para proteger as aplicações



const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middlewares'); // Importando os middlewares personalizados



app.use(helmet()); // Usando o helmet para proteger as aplicações

app.use(express.urlencoded({ extended: true })); // Aqui estamos dizendo para o Express interpretar o body do formulário (req.body)

app.use(express.json()); // Aqui estamos dizendo para o Express interpretar o body como JSON

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


app.use(csrf()); // Usando o csrf

// Nossos próprios Middlewares
app.use(middlewareGlobal); // Usando o middleware global
app.use(checkCsrfError); // Usando o middleware para verificar erros de CSRF
app.use(csrfMiddleware); // Usando o middleware para proteger as aplicações
app.use(routes); // Usando as rotas importadas


app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor rodando na porta 3000');// O servidor irá escutar na porta 3000 
  });
});

