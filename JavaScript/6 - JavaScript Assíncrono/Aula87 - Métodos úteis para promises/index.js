
// Função para criar um numero aleatório
function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

// Função para criar um timeout de execução
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string'){ reject ('Cai no erro') // criando um erro se o valor não for string
        return; } 

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' Passei na promise'); // só pode mandar uma parâmetro
            return;
        }, tempo);
    });

}


// Promise.all -- Promise.race  --- Promise.resolve -- Promise.reject

/*

//  Promise.all
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
})

*/


// Promise.race

/*
const promises2 = [
    esperaAi('Promise 1', aleatorio (1, 5)),
    esperaAi('Promise 2', aleatorio (1, 5)),
    esperaAi('Promise 3', aleatorio (1, 5)),
   // esperaAi(1000, 1000),
];

// Ele entrega a primeira que resolver
Promise.race(promises2)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
})
*/


// Promise.resolve
/*
function baixaPagina() {
    const emCache = false;
    if (emCache) {
        return Promise.resolve('Página em cache'); // O Promise.resolve cria uma Promise já resolvida
    } else {
        return esperaAi('Baixei a página', 3000);
    }

}


baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));

*/


// Promise.reject

function baixaPagina() {
    const emCache = true; // Simulando que a página está em cache
    if (emCache) {
        return Promise.reject('Página em cache'); // O Promise.reject cria uma Promise já rejeitada
    } else {
        return esperaAi('Baixei a página', 3000);
    }

}


baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log('ERRO', e));

