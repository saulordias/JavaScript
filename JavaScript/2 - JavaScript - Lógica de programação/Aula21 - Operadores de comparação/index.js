/*

Operadores Lógicos

&& = AND -- E
|| = OR -- OU
! = NOT -- NÃO

*/

// Exemplo de AND 

const expressaoAnd = true && true && true && true; // TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR "TRUE"
console.log(expressaoAnd); 

// FIM

// Exemplo de OR

const expressaoOr = true || false || false || false; // é uma escolha de uma ou outra - então apenas uma das duas precisam ser "True"
console.log(expressaoOr); 

// FIM

// Exemplo de NOT

console.log(!true); // resultado vai ser false

// FIM
























// Exemplo para usar na prática

const usuario = 'Saulo'; //form que o usuário digitou
const senha = '1234'; //form que o usuário digitou

 
const vaiLogar = usuario === 'Saulo' && senha === '1234';

console.log(vaiLogar);
