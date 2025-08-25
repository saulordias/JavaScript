type TemNome = {nome: string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND por ser  lido

const pessoa: Pessoa = {
 nome: 'Saulo',
 sobrenome:'Dias',
 idade: 20,
}

console.log(pessoa);

// Module mode
export {pessoa}



// OUTRO EXEMPLO DE INTERSEÇÃO
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;




