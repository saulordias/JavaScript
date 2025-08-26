export class Pessoa {

    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string // é necessario colocar o '_' para diferenciar o atributo do metodo (get e set)

    ) { }

    /*
    // MANEIRA ANTIGA

    // Exemplo de Setter
    setCpf(valor: string):void {
        this.cpf = valor;
    }

    // Exemplo de Getter
    getCpf(): string {
        return this.cpf.replace(/\D/g, '');
    }
*/

 // Forma mais atualizada de fazer Getter e Setter

    set cpf(cpf: string) {
        console.log('SETTER CHAMADO');
        this._cpf = cpf;
    }

    get cpf(): string {
        console.log('GETTER CHAMADO');
        return this._cpf.replace(/\D/g, '');
    }


}

const pessoa = new Pessoa('Saulo', 'Dias', 30, '123.045.798-00',);

pessoa.cpf = '000.000.000-00'; // para acessar o set
console.log(pessoa.cpf); // para acessar o get

