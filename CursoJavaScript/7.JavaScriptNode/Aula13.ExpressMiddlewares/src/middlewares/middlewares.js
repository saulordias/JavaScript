exports.middlewareGlobal = (req, res, next) => {
    /*
    // No if abaixo verificamos se a URL passada passa pelo req.body.cliente, se sim, executamos o console.log
    // Isso é útil para verificar se o cliente está enviando dados no formulário
    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Miranda', 'NÃO USE MIRANDA'); // Exemplo de sanitização, substituindo 'Miranda' por 'NÃO USE MIRANDA'
        console.log();
        console.log(`Vi que você postou ${req.body.cliente}`)
        console.log();
    }
    */

    next();
}

exports.outroMiddleware = (req, res, next) => {
    next();
}