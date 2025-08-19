// g - Global (encontra todas as ocorrências)
// i - insensitive (ignora maiúsculas e minúsculas)
// () - para criar grupos
// | - OU

const { texto } = require ('./base.js');

/* -- Exemplo de grupo
const regExp1 = /(maria)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);
*/

// console.log(regExp1.test(texto)); // varialvel.test é um método que verifica se a expressão regular encontra correspondência no texto

// console.log(regExp1.exec(texto)); // varialvel.exec é um método que retorna um array com as correspondências encontradas



// exemplo de ou
const found = regExp1.exec(texto);

if (found){
console.log(found[0]);
console.log(found[1]);
console.log(found[2]);

}


