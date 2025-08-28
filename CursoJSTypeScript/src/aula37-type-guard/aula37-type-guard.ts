// Type guard são formas de verificar tipos em tempo de execução

export function add(a: unknown, b: unknown): number | string {
    return typeof a === 'number' && typeof b === 'number' ? a + b : `${a} ${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));


type Pessoa = {tipo: 'pessoa', nome: string};
type animal = {tipo: 'animal', cor: string};

type PessoaOuAnimal = Pessoa | animal;

class Aluno implements Pessoa {
    tipo: 'pessoa' = 'pessoa';
    constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
    // if('nome' in obj) console.log(obj.nome); //Type guard
    // if (obj instanceof Aluno) console.log(obj.nome);
    switch (obj.tipo) {
        case 'pessoa':
            console.log(obj.nome);
            return;
        case 'animal':
            console.log('Isso é um animal', obj.cor);
            return;

}
}

mostraNome(new Aluno('Saulo'));
mostraNome({tipo: 'animal', cor: 'Rosa'});