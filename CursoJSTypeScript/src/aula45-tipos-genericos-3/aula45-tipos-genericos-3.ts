interface PessoaProtocolo<T=string, U=number> {
    nome: T;
    sobrenome: T;
    idade: U;

}

// Funciona como type e interface da mesma forma
type PessoaProtocolo2<T=string, U=number> = {
    nome: T;
    sobrenome: T;
    idade: U;

}


const aluno: PessoaProtocolo<string, number> = {
    nome: 'Saulo',
    sobrenome: 'Dias',
    idade:30
}

console.log(aluno);

const aluno2: PessoaProtocolo<number, number> = {
    nome: 123,
    sobrenome: 456,
    idade:30
}

console.log(aluno2);

const aluno3: PessoaProtocolo = { // Aqui está assumindo o tipo padrão definido la em cima
    nome: 'Saulo',
    sobrenome: 'Dias',
    idade:30
}

console.log(aluno3);