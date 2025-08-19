/* 
Primitivos (imutáveis) -- String, Number, Boolean, Undefined, Null (bigind, symbol)
Dado = Valor

Referencia (Mútavel) = array, object, function -- Passado por refêrencia

*/

//// Exemplo de imutável ///////
/*
//          01234
let nome = 'Saulo'; // string
nome[0] = 'P'; // ele não vai alterar a String 
console.log(nome[0], nome);
*/

//////////////// FIM /////////////////////

////////////////// Exemplo de um valor não primitivo /////////////

/*
let a = 'A';

let b = a; // Cópia 

console.log(a, b);

// exemplo

a = 'Outra coisa';
console.log(a, b); // O b vai manter o valor inicial de A.. a alteraração do "a" não altera o de "b"
*/

//////////////// FIM /////////////////////

/////////////////////ARRAY --- VALORES PASSADO POR REFERENCIA////////////////////////////////////////////////
/*
let a = [1, 2, 3];
let b = a;
let c = b;

console.log(a, b);  // a quanto b apontam para o mesmo local na memória

a.push(4);
console.log(a, b); // COMO É UM VALOR POR REFERÊNCIA, AMBOS SÃO ALTERADOS

// EXEMPLO MUDANDO B

b.pop();
console.log (a, b);

//

a.push('Luiz');
console.log (c);

*/

//////////////// UM EXEMPLO DE COMO COPIAR O VALOR DE a EM UMA REFERENCIA ///////////////
/*
let a = [1, 2, 3];
let b = [...a]; // Assim você está copiando  o valor de a 
let c = b;

a.push('Saulo');

console.log (a, b, c); // ira mostrar o primeiro valor de a em B e C.. pois o valor foi copiado para B.. e alterou somente o A
*/
//////////////// FIM /////////////////////

/////////////// CRIANDO UM OBJECT -- PASSA VALORES POR REFERENCIA ////////////////////

const a = {
    nome: 'Saulo',
    sobrenome:'Dias'

};

// const b = a; // DESSA FORMA O VALOR PASSA POR REFERENCIA
const b = {...a}; // DESSA FORMA ESTAMOS COPIANDO O VALOR DE A .. E MESMO QUE ALTERE O VALOR DE A DEPOIS DISSO.. O VALOR DE B SERÁ MANTIDO O INICIAL DE A
a.nome = 'João';

console.log(a);
console.log(b);