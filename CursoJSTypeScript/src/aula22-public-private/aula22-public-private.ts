export class Empresa {
    readonly nome: string; // a palavra public não necessário
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    // método construtor
    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;

    }

    // método para adicionar colaboradores
    adicionarColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    // método para mostrar os colaboradores
    mostrarColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }


}

// Isso é uma forma resumida do que poderia ser feito acima na "class EMPRESA"
export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string
    ) { }
}

const empresa1 = new Empresa('Instagram', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Saulo', 'Dias');
const colaborador2 = new Colaborador('Leticia', 'Dias');
const colaborador3 = new Colaborador('Orli', 'Dias');

empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);


empresa1.mostrarColaboradores();



console.log(empresa1);