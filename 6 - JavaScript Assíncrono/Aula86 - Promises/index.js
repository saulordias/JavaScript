
// Função para criar um numero aleatório
function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

// Função para criar um timeout de execução
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject ('Bad Value') // criando um erro se o valor não for string
        setTimeout(() => {
            resolve(msg); // só pode mandar uma parâmetro
        }, tempo);
    });






}

// Exemplo de uso de Promise// A função esperaAi retorna uma Promise
// A função resolve é chamada quando a Promise é cumprida

esperaAi('Conexão com o banco de dados', aleatorio(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da BASE DE DADOS', aleatorio(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi('Tratando os dados da BASE DE DADOS', aleatorio(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi(2222, aleatorio(1, 3)) // passando um dado sem ser string para erro e cair no catch
})
.then (resposta => {
    console.log(resposta);
})
.catch(e => {
    console.log('Erro:', e);
});


// A diferença de usar Promise é que podemos encadear várias chamadas de funções assíncronas
// e tratar erros de forma mais organizada com o .catch