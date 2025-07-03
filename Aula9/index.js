// String, number, undefined, null, boolean, symbol (vamos ver futuramente) -- dados primitivos

const nome = 'Saulo'; //string
const nome1 = "Luiz"; //string
const nome2 = `Saulo`; //string
const num1 = 10; //number
const num2= 10.52; //number
let nomeAluno; //undefined = NÃO APONTA PRA LOCAL NENHUM NA MEMÓRIA
const sobrenomeAluno = null; // Nulo = NÃO APONTA PRA LOCAL NENHUM NA MEMÓRIA
const aprovado = true // exemplo de boolean //const boolean = true or false
 
console.log (typeof nome, nome); // para vericar o tipo e o valor

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2 
