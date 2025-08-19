// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os números (reduce)
const total = numeros.reduce(function (acumulador, valor) {
  // acumulador é o valor retornado na iteração anterior
  acumulador += valor; // += é para somar o valor atual ao acumulador
  return acumulador;
}, 0) // definindo o valor inicial do acumulador em 0

console.log(total); // aqui ele mostra o total -- com isso a reduce fez o papel dela.. de reduzir um array em um unico valor.



console.log('-------------------');


// Retorne um array com os pares (usando reduce como filter) -- Apenas como exemplo -- use o filter

const pares = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) acumulador.push(valor); // aqui ele verifica se o valor é par e adiciona ao acumulador
  return acumulador;
}, []) // aqui o acumulador começa como um array vazio, e vai adicionando os valores pares encontrados

console.log(pares);

console.log('-------------------');

// Retorne um array com o dobro dos valores (usando reduce como map) -- Apenas como exemplo -- use o map

const dobro = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2); // aqui ele esta calculando o valor * 2 
  return acumulador;
}, []) // aqui o acumulador começa como um array vazio, e vai adicionando os valores pares encontrados

console.log(dobro);


console.log("##############################################################")

//Retorne a pesosa mais velha

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 101 },
  { nome: 'Wallace', idade: 47 }

];


// aqui estamos usando o reduce para encontrar a pessoa mais velha
const maisVelha = pessoas.reduce(function(acumulador, valor){
  if (acumulador.idade > valor.idade) return acumulador; // se o acumulador for maior que o valor atual, retorna o acumulador
  return valor; // caso contrario retorna o valor atual
});

console.log(maisVelha);