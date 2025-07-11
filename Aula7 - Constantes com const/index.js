//CONSTANTES


//Não podemos declarar Constantes com palavras reservadas, como let, var, const, if, else, etc.
//Constantes precisam ter nomes significativos.
// Não pode começar o nome da constante com número
// As constantes não pode conter espaços ou caracteres especiais
// Case sensitive: JavaScript diferencia maiúsculas de minúsculas
//utilizamos camelCase para nomear constantes
// Não pode modificar o valor de uma constante
// Não utilize var, utilize const.

const nome = 'João';
console.log(nome);
// const nome = 'Maria'; // Isso é inválido, pois não podemos modificar uma constante

//+ - * / 
const primeiNumero = '5'; // number
const segundoNumero = 10;
const resultado= primeiNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3; // exemplo de para modificar
resultadoTriplicado = resultadoTriplicado + 5; // Modificando o valor da variável
console.log(primeiNumero);

console.log(primeiNumero+ segundoNumero); // Isso irá concatenar as strings, não somar os números --- por que é uma string com um number
// console.log(typeof primeiNumero); // Isso irá mostrar o tipo da variável, que é string

console.log(typeof (primeiNumero+ segundoNumero)); // Isso irá mostrar o tipo da variável, que é string, pois a concatenação de uma string com um number resulta em uma string
