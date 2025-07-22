/*
let A = 'A'; //B
let B = 'B'; // C
let C = 'C'; // A

// [A, B, C] = [ B, C, A ];

// outra forma de atribuição via desestruturação

const letras = [B, C, A];

[A, B, C] = letras;


console.log(A, B, C); // B C A
*/

// esse operador ... (três pontos) é chamado de rest operator, e ele serve para pegar o restante dos valores de um array ou objeto
// quando utilizamos no sentido de espalhamento, ele é chamado de spread operator

/*

//               0     1     2     3     4     5     6     7     8     -- valor do indice
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

//const [primeiroNumero, segundoNumero, ...restante] = numeros; // aqui estamos utilizando a desestruturação de arrays


// caso queira, podemos pegar o restante dos números em uma variável utilizando ... (três pontos)

//console.log(primeiroNumero, segundoNumero, restante);

// outro exemplo de desestruturação de arrays, onde pegamos apenas alguns números do array e pulamos os outros
/*
const [um, , tres, , cinco, , sete] = numeros; // aqui estamos pulando os números que não queremos pegar


console.log(um, tres, cinco);
*/

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2   --- dentro das listas também tem indices
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];


console.log(numeros [1] [2]); // forma para mostrar o número 6 

// exemplo mais complexo

const [,[,, seis]] = numeros; // pegando o numero 6

console.log(seis);


const [lista1, lista2, lista3] = numeros;

console.log(lista3 [2]); // mostrando o numero 9 
