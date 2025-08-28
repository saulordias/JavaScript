type TipoPessoa = {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;

}

/* Separando os tipos acima para mostrar outro exemplo

type TipoNome = {
    nome: string;
}

type TipoSobrenome = {
    sobrenome: string;
}

type TipoNomeCompleto = {
    nomeCompleto(): string;
}
*/

export class Pessoa implements TipoPessoa { //Utilizamos implements para implementar um Type Alias em uma classe
    // export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto --- se fizesse separados os type


    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;

    }
}

const pessoa = new Pessoa ('Saulo', 'Dias');
console.log(pessoa.nomeCompleto());