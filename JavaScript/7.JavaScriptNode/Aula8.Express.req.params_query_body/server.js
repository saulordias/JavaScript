const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true })); // Aqui estamos dizendo para o Express interpretar o body do formulário (req.body)



app.get('/',(req, res) => {  // Aqui estamos definindo uma rota para o método GET na raiz do servidor
    res.send(`
        <form action="/" method="POST">
            NOME DO CLIENTE: <input type="text" name="nome"></input>
            <button>Enviar Saulo</button>

        </form>
    `);

})

app.get(
  [
    '/testes',
    '/testes/:idUsuarios',
    '/testes/:idUsuarios/:acao'
  ],
  (req, res) => {
    const { idUsuarios, acao } = req.params; // REQ.PARAMS usamos para capturar parâmetros de rota
    const { outroParametro } = req.query; // REQ.QUERY usamos para capturar parâmetros de consulta (query string)
    res.send(
      `${idUsuarios || 'nenhum'}<br>${acao || 'nenhuma'}<br>${outroParametro || 'nenhum'}`
    );
    console.log(req.params, req.query);
  }
);

// app.post é usado para receber dados de um formulário
// O método POST é usado para enviar dados ao servidor
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`); // Esse nome pegamos na rota da requisição
})



app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor rodando na porta 3000');

}); // O servidor irá escutar na porta 3000