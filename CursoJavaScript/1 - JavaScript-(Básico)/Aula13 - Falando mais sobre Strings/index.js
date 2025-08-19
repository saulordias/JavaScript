// let umaString = 'Um \"texto\"'; // Usamos a barra invertida como caractere de escape.

//               01234567    ---- 
//let umaString = 'Um texto';

//console.log(umaString[8]); // Para você selecionar um campo dessa string -- nisso ele vai mostrar a letra 'e'. Se selecionar fora do range -- ele volta undefined

//console.log(umaString.charAt(8)); // outra forma --- mas nesse se estiver fora do range ele retorna vazio

//console.log(umaString.charCodeAt(6)); // para você ver qual o códido na tabela At

//console.log(umaString.concat(' ', 'em', ' ', 'um lindo dia')); // uma forma de concatenar o valor
//console.log(umaString + ' em um lindo dia'); // outra forma de concatenar
//console.log(` ${umaString} em um lindo dia.`); // FORMA MAIS USADA -- TEMPLATESTRING

//console.log(umaString.indexOf('o', 3)); // aqui ele começa a busca a partir do indice 3 e busca a letra 'o' -- se ele não encontrar ele volta -1

//console.log(umaString.lastIndexOf('m', 3)); // nesse ele começa a busca de trás para frente

console.log(umaString.match(/x/)); // para encontrar usando expressão regurar --[a-z]

//console.log(umaString.replace('Um', 'outra')); // para substituir o valor do texto

////////////////////////////////////////////////////////////////////

//               0123456789   
let umaString = 'O rato roeu a roupa do rei de Roma.';

console.log(umaString.replace(/r/g, '#')); // substitui todas as letras 'r' por '#'
console.log(umaString.length); // mostra o tamanho da string
console.log(umaString.slice(2, 6)); // mostra o pedaço da string do indice 2 ao 6
console.log(umaString.slice(-5, -1)); // mostra o pedaço da string do indice -5 ao -1 (contando de trás para frente)


console.log(umaString.split(' '));// divide a string em um array, usando o espaço como separador
console.log(umaString.split('r')); // divide a string em um array, usando a letra 'r' como separador
console.log(umaString.split(' ', 3)); // divide a string em um array, usando o espaço como separador, mas limita a 3 elementos

// Lugares para estudar mais sobre strings:
// www.w3schools.com/js/
// developer.mozilla.org/pt-BR/docs/Web/JavaScript

console.log(umaString.toUpperCase()); // transforma toda a string em maiúsculas
console.log(umaString.toLowerCase()); // transforma toda a string em minúsculas