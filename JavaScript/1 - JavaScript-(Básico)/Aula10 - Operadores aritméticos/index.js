/* Aritméticos   

* + Adição / concatenação
* - / *
* ** Potenciação --- ex 2 elevado a 10 
* % Resto da divisão

Precedência dos operadores -- 

()
**
* / %
+ - 

*/

const num1 = 10;
const num2 = 3;

console.log(num1%num2); // Aplicando os operadores


/* 
Incremento = ++
Decremento = --

*/ 

/*
let contador2 = 1;
contador2++;
console.log(contador2);    --- Forma correta
*/


let contador = 10; // Exemplo: contador++; //2 , contador++; //3 , contador++; //4

console.log(contador++); // Assim ele primeiro ira mostrar o valor, e depois irá encrementar + 1

console.log(++contador); // Assim ele já encrementa e já mostra com o valor com + 1 

////////////////////////////

console.log(contador--); // Assim ele primeiro ira mostrar o valor, e depois irá subtrair - 1

console.log(--contador); // Assim ele já subtrair e já mostra com o valor com - 1

// outra forma 
const passo = 2
let contador3 = 0;

contador3 = contador3 + passo
console.log(contador3);
contador3 = contador3 + passo
console.log(contador3);
contador3 = contador3 + passo
console.log(contador3);

// OPERADORES DE ATRIBUIÇÃO -- ex: +=  -=  /=  *=  **= 

// Forma mais simples

const passo1 = 50
let contador4 = 0;

contador4 += passo1; // Isso seria = contador + 50
contador4 += passo1;
contador4 += passo1;

console.log(contador4)

////////////////

// Cuidado ao realizar esses processos.. Exemplos de erro

/*
const num10= 10;
const num11= 'Saulo';
console.log(num10*num11); // o resultado será NAN
*/
// NAN = NOT A NUMBER -- acontece quando algum tipo de dado não está retornando um número. 

// Comandos para corrigir --- parseint = transformar em número inteiro  /// parsefloat = transformar número com decimais. // Number = ele já faz a correção de forma automática, identificando se é inteiro ou não. 

const num10= 10;
const num11= Number ('5.2'); // Exemplo de como corrigir quando é um numero e está dando resultado NAN
console.log(num10+num11); 

console.log(typeof num11);