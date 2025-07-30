// Função construtora --> objetos

// construtora --> pessoa (new)

function Pessoa (nome, sobrenome){


    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){

    }
    

    //Atributos ou métodos públicos

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function (){
        console.log(this.nome + ': sou um método');
    }


} // não é necessário a palavra return

// em funções construtoras é obrigatório utilizar a palavra 'new'

const p1 = new Pessoa('Saulo', 'Dias');
const p2 = new Pessoa('Leticia', 'Dias');


p1.metodo();

