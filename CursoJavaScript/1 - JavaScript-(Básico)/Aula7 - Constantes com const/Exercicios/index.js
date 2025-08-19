/* 
Luiz Otávio Miranda tem 30 anos, pesa 84kg e tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;
let imc; // peso / (altura * altura)
let anoNascimento;

imc= peso / (alturaEmM * alturaEmM);
anoNascimento = 2025 - idade;

/*
console.log ( nome, sobrenome, 'tem', idade, 'anos, pesa', peso,'kg e tem', alturaEmM, 'de altura eseu IMC é de', imc.toFixed(2));
console.log(nome,'nasceu em', anoNascimento,'.');
*/

// Outra forma de fazer o console.log

/*
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + 'Kg e tem ' + alturaEmM + ' de altura e seu IMC é de ' + imc.toFixed(2));
console.log(nome + ' nasceu em ' + anoNascimento);

*/

//template strings

 console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg e tem ${alturaEmM} de altura e seu IMC é de ${imc.toFixed(2)}`);
 console.log(`${nome} nasceu em ${anoNascimento}.`);