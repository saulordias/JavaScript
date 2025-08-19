const pessoa = {
nome: 'Saulo',
sobrenome: 'Dias',
idade: 30,
endereco: {
    rua: 'Av Brasil',
    numero: 320
}
};

// const nome = pessoa.nome; // para fazer atribuição normal

/*
// atribuição via desestruturação
const {nome = '', sobrenome, idade} = pessoa; // atribuição via desestruturação -- atribuindo valores padrão caso a variável não exista.

console.log(nome, sobrenome, idade); 
*/


///////////////////modiicando o nome da variavel //////////////////////////////

const { nome: testeNome = '', sobrenome} = pessoa; // atribuição via desestruturação

console.log(testeNome, sobrenome); // Saulo Dias

////////////////////////////////// como pegar o endereço ///////////////////////

const { endereco: { rua: r = 12345, numero } } = pessoa; // atribuição via desestruturação // mostrando que é possível pegar o endereço e desestruturar ele também e já atribuindo valores padrão caso a variável não exista.


console.log(r, numero);

///////////// para pegar o resto ///////////////

const { nome, ...resto } = pessoa; // atribuição via desestruturação // pegando o resto do objeto

console.log(resto); // { sobrenome: 'Dias', idade: 30, endereco: { rua: 'Av Brasil', numero: 320 } }