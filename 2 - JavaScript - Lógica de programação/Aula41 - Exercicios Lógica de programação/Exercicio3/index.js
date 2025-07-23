/*
Escreva uma função que recebe um número
Retorne o seguinte:
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FiZZBuzz
Número NÃO é divisivel por 3 e 5 = retorna o próprio número
checar se o número é realmente um número.
use a função com números de 0 a 100
*/


// Resolução do Saulo

function eDivisor(n) {
    // Aqui ele está fazendo uma lógica para saber se é um número.
    if (typeof n === 'number' && !Number.isNaN(n)) {

        if (n % 3 === 0 && n % 5 === 0) {
            return 'FizzBuzz';
        } else if (n % 3 === 0) {
            return 'Fizz';
        } else if (n % 5 === 0) {
            return 'Buzz';
        }
        return n;

    } else {
        return 'Não é um número';
    }
}

for (let i = 0; i <= 100; i++){
    console.log( i, eDivisor(i));
}

//console.log(eDivisor(2));

// FIM

console.log('###### RESPOSTA DO PROFESSOR ######')

// Resolução do professor

function fizzBuzz (numero){
    if (typeof numero !== 'number') return numero;
    if (numero% 3 == 0 && numero % 5 ===0) return 'FizzBuzz';
    if (numero % 3 ===0) return 'Fizz';
    if (numero % 5 ===0) return 'Buzz';
    
    return numero;
}

for (let i = 0; i <= 100; i++){
    console.log( i, fizzBuzz(i));
}
    