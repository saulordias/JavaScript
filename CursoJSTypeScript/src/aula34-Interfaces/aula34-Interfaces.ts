interface TipoNome {
    nome: string;
}

interface TipoSobrenome {
    sobrenome: string;
}

interface TipoNomeCompleto {
    nomeCompleto(): string;
}

// a diferença de types e interfaces - é que types eu posso criar tipos simples utilizando somente o sinal de igual
type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {} // Forma de fazer o que está acima com interface


export class Pessoa implements TipoPessoa{

    constructor(public nome: string, public sobrenome: string) { }

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;

    }
}

// Utilizando em object 

const pessoaObj: TipoPessoa = {
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    },
    nome: 'Saulo',
    sobrenome: 'Dias0'
}

const pessoa = new Pessoa('Saulo', 'Dias');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());