//Declation margin - Junção de interfaces

interface Pessoa  {
    nome: string;
};

interface Pessoa {
    readonly sobrenome: string;
}

interface Pessoa {
    readonly enderecos?: string[]; // Aqui estamos falando que a propriedade é readonly.. mas também é opcional
}

const pessoa: Pessoa = {
    nome: 'Saulo',
    sobrenome: 'Dias',
    enderecos: ['Av. Brasil'],

}

console.log(pessoa);
 
// Esta linha transforma o arquivo em um módulo, isolando seu escopo.
export {};
