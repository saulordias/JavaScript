exports.paginaInicial = (req, res) => {
    //req.session.usuario = { nome: 'Saulo', logado: true }; // Exemplo de uso de sessão

    /*
    req.flash('info', 'Olá Mundo!'); // Exemplo de uso de flash message
    req.flash('error', 'Algo deu errado!'); // Exemplo de uso de flash message
    req.flash('success', 'Mensagem de sucesso!'); // Exemplo de uso de flash message
    console.log(req.flash('info'), req.flash('error'), req.flash('success')); // Exibe a mensagem de info no console


    //  Mensagens de flash são armazenadas na sessão e podem ser acessadas em qualquer rota mas são removidas após serem lidas uma vez.


    */
    res.render('index');
    return;



};

// 
exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};


