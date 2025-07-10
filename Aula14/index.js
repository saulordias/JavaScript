// IEEE 754-2008

//let num1 = 150000000;
//let num2 = 2.5;
/*
console.log( num1 + num2 ); // Soma

console.log( num1.toString() + num2 ); // aqui ele altera o valor, mas não de forma total.

console.log(typeof num1) // resultado ainda será um number

// exemplo para alterar de forma total

//num1 = num1.toString();
console.log(typeof num1) // resultado será uma string --

console.log(num1.toString(2)); // converte para binário
*/

//let num1 = 10.55645445645;

//console.log(num1.toFixed(2)); // defir no numero de casas decimáis 
/*
let num1 = 10.25;

console.log(Number.isInteger(num1)); // retorna se é um numero inteiro ou não (True or false)

/// gerando um erro

let temp = num1 + '5';

//console.log(temp)
//console.log(Number.isNaN(temp)); // para verificar se a conta é invalida -- ele vai retornar True

console.log(temp)

*/

let num1 = 0.7;
let num2 = 0.1;

//num1 += num2 // num1 = num1 + num2 

/*
num1 += num2 // 0.8 
num1 += num2 // 0.9
num1 += num2 // 1.0
*/
// o resultado está dando isso 0.9999999999999999

//num1 = num1.toFixed(2); // forma incorreta de fazer dar o resultado inteiro correto dessa conta

//console.log(Number.isInteger(num1)); // quando vc vai verificar se é inteiro ele da false. 

// para resolver esse problema


//num1 = parseFloat (num1.toFixed(2)); // forma correta de converter a um numero inteiro a conta que estava dando 0.9999999999999999

//console.log(Number.isInteger(num1)); // resultado verdadeiro

// Outra forma é usar o num1 = Number (num1.toFixed(2));


// **************** FORMA DE RESOLVER DIFERENTE DAS OPÇÕES ACIMA  (mais complexo)***************** 

num1 = ((num1 * 100) + (num2 * 100))/100  //0.8
num1 = ((num1 * 100) + (num2 * 100))/100  //0.9
num1 = ((num1 * 100) + (num2 * 100))/100  //1.0

console.log(num1);
console.log(Number.isInteger(num1));

