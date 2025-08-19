/*
const multipicacao = require ('./mod1');

console.log(multipicacao(2, 2));
*/

//  Importando uma class

/*
const cachorro = require ('./A/B/C/mod1');

const rex = new cachorro('Rex');
rex.latir();

*/

/*
// Aqui estamos exportando o mod1 para o mod 2 e depois estamos importando aqui o mod2 com o modulo do mod1
// Importando de outro mod

const cachorro = require ('./Z/mod2');

const rex = new cachorro('Rex');
rex.latir();


// para frente utilizamos ' ./ o arquivo ou pasta'

// para tras utilizamos ' ../ o arquivo ou pasta ' -- Sempre que precisar ir voltando é só ir dando ../

*/

console.log(__filename);
console.log(__dirname);

// __filename é o caminho do arquivo que está sendo executado
// __dirname é o caminho da pasta que está sendo executado

console.log('###########################');


// Utilizando Path
const path = require('path');

console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens')); // Aqui estamos voltando duas pastas e depois entrando em 'pastas (ficticias)' para mostrar que conseguimos avançar novamente.


/// FIM

