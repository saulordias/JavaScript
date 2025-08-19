// Imaginando uma situação invíavel --

/*
const nome01 = 'Luiz';
const sobrenome01 = 'DIas';
const idade01= 25;

const nome02 = 'Saulo';
const sobrenome02 = 'Oliveira';
const idade02 = 55;
*/



//////////////// Forma de realizar o que está acima //////////////////////////////

/*
const pessoa1 = {
    nome: 'Saulo',
    Sobrenome: 'Dias',
    Idade: 30
};

console.log(pessoa1.nome);
console.log(pessoa1.Sobrenome);
console.log(pessoa1.Idade);

const pessoa2 = {
    nome: 'Leticia',
    Sobrenome: 'Dias',
    Idade: 24
};

console.log(pessoa2.nome);
console.log(pessoa2.Sobrenome);
console.log(pessoa2.Idade);
*/

//////////////////////////////////////////////// FIM /////////////////////////////////////////

/////////////////////// Forma mais fácil de ralizar, utilizando Function /////////////////////////

/*
function criaPessoa (nome, sobrenome, idade){
return { nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Saulo', 'Dias', 30);
const pessoa2 = criaPessoa('Leticia', 'Dias', 30);
const pessoa3 = criaPessoa('Luiz', 'Vieira', 30);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);

console.log(pessoa1.nome, pessoa2.nome); 
*/

///////////////////// FIM ////////////////////////////////

/////////////////////////Criando objetos com mais de uma function //////////////////////////////////

const pessoa1 = {
nome: 'Saulo',
sobrenome: 'Dias',
Idade: 30,

/*
fala(){
 console.log(`${this.nome} ${this.sobrenome} está falando oi...`); // This é o objeto ... nesse caso seria "pessoa1"
},
*/


fala(){
 console.log(`A minha atual é ${this.Idade}.`); 
},

incrementaIdade(){
    ++this.Idade;
},




};

pessoa1.fala();
pessoa1.incrementaIdade(); // aqui ele está incrementando idade de 30 para 31 
pessoa1.fala(); // aqui está mostrando a nova idade

//////////////////////////////// FIM /////////////////////////////////////////////////////////////

