/*
const nome = 'Saulo';
const sobrenome = 'Dias';

const falaNome = () => nome + ' ' + sobrenome;

//falaNome();

// forma de exportar as coisas.

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;



// outra forma de exportar sem a palavra module.

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;


// outra forma, mas não é muito usando.
this.qualquerCoisa = 'O que eu quiser exportar';


console.log(module.exports);

*/



///////////////////////// OUTRO EXEMPLO ///////////////////////////////

class Pessoa {
    constructor(nome){
        this.nome = nome;
    
    }
}

exports.Pessoa = Pessoa; // outra forma de exportar

