// CONJUNTOS E RANGES

const { alfabeto } = require ('./base.js');

// [] -- Conjunto
// [^alguma coisa] -- Negação


console.log(alfabeto);
console.log(alfabeto.match(/[abc123]+/gi)); // O + significa tudo que esta dentro.. mais alguma coisa
console.log(alfabeto.match(/[^abc123]/gi)); // O ^ significa menos o que está aqui dentro

// [-] Range
//[0-9]
//[min-max]
//[min-maxQUALQUERCOISA]


console.log(alfabeto.match(/[0-9]/g)); 
console.log(alfabeto.match(/[a-k]/g)); 
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // NEGAÇÃO
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); // UNICODE
console.log(alfabeto.match(/\w+/g)); // Utilizando atalho de a-zA-Z0-9
console.log(alfabeto.match(/\d+/g)); // Utilizando atalho de 0-9
console.log(alfabeto.match(/\D+/g)); // negação do atalho
console.log(alfabeto.match(/\s+/g)); // Atalho para encontrar espaços
console.log(alfabeto.match(/\S+/g)); // negação do atalho

















