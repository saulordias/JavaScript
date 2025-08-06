
// Função para criar um numero aleatório
function aleatorio(min = 0, max = 3) {
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
            resolve(msg.toUpperCase()); // só pode mandar uma parâmetro
            return;
        }, tempo);
    });

}

/*

//Exemplo usando Promise assíncrona
esperaAi ('Fase 1', aleatorio())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', aleatorio());
    })
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 3', aleatorio());
    })
    .then(valor => {
        console.log(valor);
        return valor;
    })
    .then(final => console.log('Finalizamos na:', final))

    .catch(e => console.log ('Erro:', e));

*/

// Exemplo utizando async

async function executa() {
    // utilizamos o try e catch para tratar o erro nessa função async
    try{
        const fase1 = await esperaAi('Fase 1', aleatorio());  // utilizamos o await para esperar a Promise ser resolvida
     console.log(fase1);
     const fase2 = await esperaAi('Fase 2', aleatorio());
     console.log(fase2);
     const fase3 = await esperaAi('Fase 3', aleatorio());
     console.log(fase3);
     console.log('Finalizamos na:', fase3);
    } catch(e) {
        console.log('Erro:', e);
    }
     
    
}


executa();


/*

ESTADOS DA PROMISE

* PENDENTE (pending)

* Fulfilled (cumprida)

* Rejected (rejeitada)

*/