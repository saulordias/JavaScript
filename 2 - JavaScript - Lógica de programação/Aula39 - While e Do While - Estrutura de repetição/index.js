// Exemplo 

// const nome = 'Saulo';

// let i = 0;

// while (i < nome.length){
//     console.log(nome[i]);
//     i++;   // sempre necessário incluir o i++
// }


// novo exemplo real

// Função que gera um número aleatório entre min e max
function random(min, max) {
    const r = Math.random() * (max - min) + min; // Math.random() gera um número entre 0 e 1
    return Math.floor(r); // aqui arredondamos o número para baixo
}

const min = 1;
const max = 50;
// let rand = random(min, max);
let rand = 10;



// While signofica "enquanto".
while (rand !== 10){     //  enquanto rand for diferente de 10, continue o loop
    rand = random(min, max);
    console.log(rand);
}

console.log('########################################');

// Do While significa "faça enquanto".
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10); 

// A diferença é que o Do While executa pelo menos uma vez, mesmo que a condição seja falsa.