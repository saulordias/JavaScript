// For in ---: Lê os indices ou chaves do objeto ou array

/*
const frutas = ['Pêra', 'Maçã', 'Uva'];


///// Exemplo simplificado de for in ///////


for (let indice in frutas){ // essa está lendo os indices do Array
    console.log(frutas[indice]);

}
*/
////////////////////OUTRO EXEMPLO//////////////////////

const pessoa = {
    nome: 'Saulo',
    sobrenome: 'Dias',
    idade: 30
};

for (let chave in pessoa ){
    console.log(chave, ':', pessoa[chave]);
}

//Formas de acessar

const chave = 'nome';
console.log(pessoa.nome);
console.log(pessoa[chave]);
// console.log(pessoa['nome']); // Se não tiver uma variável declarada

///////////////////////////////////////////////////////////

