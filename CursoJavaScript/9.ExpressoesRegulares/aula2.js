// STRING MATCH E REPLACE

const { texto } = require ('./base.js');

const regExp1 = /joão|maria/gi; 







// console.log(texto);

// console.log(texto.match(regExp1)); // método match retorna um array com todas as ocorrências encontradas no texto

// console.log(texto.replace(/João|Maria/gi, 'Saulo')); // método replace substitui todas as ocorrências encontradas no texto por outro valor

// console.log(texto.replace(/(João|Maria)/gi, '"$1"')); // método replace com grupos, substitui as ocorrências encontradas por outro valor, no exemplo usamos uma variável para capturar o grupo encontrado e colocá-lo entre aspas

// console.log(texto.replace(/(João|Maria)/gi, function(input){ //Aqui usamos uma função de callback para manipular o texto encontrado
//   // input é o texto encontrado, podemos manipulá-lo como quisermos
//     return input.toUpperCase(); // retorna o texto encontrado em maiúsculas
// }));







