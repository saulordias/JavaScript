exports.paginaInicial = (req, res) => {

    res.send(`
        <form action="/" method="POST">
            NOME DO CLIENTE: <input type="text" name="nome"></input>
            <button>Enviar Saulo</button>

        </form>
    `);

};

// 
exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST');
};


