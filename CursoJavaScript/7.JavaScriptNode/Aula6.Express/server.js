const express = require('express');

const app = express();

//          Criar   Ler   Atualizar   Deletar
// CRUD ->  CREATE, READ, UPDATE,     DELETE
//         POST    GET   PUT/PATCH   DELETE

app.get('/',(req, res) => {  // Aqui estamos definindo uma rota para o método GET na raiz do servidor
    res.send(`
        <form action="/" method="POST">
            NOME: <input type="text" name="nome"></input>
            <button>Enviar</button>

        </form>
    `);

})

// app.post é usado para receber dados de um formulário
// O método POST é usado para enviar dados ao servidor
app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})



app.get ('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor rodando na porta 3000');

}); // O servidor irá escutar na porta 3000