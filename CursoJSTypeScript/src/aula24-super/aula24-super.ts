//// SUPER CLASSE ////
export class Pessoa {

    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string
    
    ) {}
    

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }


}


//// SUB CLASSES ////

// Usando a herança e Polimorfismo 

export class Aluno extends Pessoa {

    constructor(
         nome: string,
         sobrenome: string,
         idade: number,
         cpf: string,
         public sala: string,
    
    ) {  // recebendo os valores
        super(nome, sobrenome, idade, cpf);
        this.sala = sala;
    }
    
     getNomeCompleto(): string {
        console.log('FAZENDO ALGO ANTES');
        const result = super.getNomeCompleto();
        return result + ' heeey';
    }
}
export class Cliente extends Pessoa {
     getNomeCompleto(): string {
        return ` Isso vem do Cliente ${this.nome} ${this.sobrenome}`;
    }
}


const aluno = new Aluno('Saulo', 'Dias', 30, '000.000.000-00', '3ºA');
const cliente = new Cliente('Ulisses', 'Costa', 50, '000.000.000-01');

console.log(aluno);
// console.log(cliente.getNomeCompleto());