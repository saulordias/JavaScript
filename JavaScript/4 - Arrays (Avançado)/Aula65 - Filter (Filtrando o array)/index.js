// Filter -- > sempre vai retornar um array com a mesma quantidade de elementos ou menos.



// Retorne os números maiores que 10
//               0   1   2  3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* forma de fazer com uma função
function callbackFilter(valor){
    return (valor > 10); 
}
*/


const numerosFiltrados = numeros.filter(function (valor){  // aqui estamos usando uma função anonima (JEITO MAIS UTILIZADO PARA FAZER FILTER)
    return (valor > 10); 
}); 

console.log(numerosFiltrados);


// CASO QUEIRA NESSE CASOI PODERIA USAR UMA ARROW FUNCTION

const numerosFiltrados2 = numeros.filter(valor => (valor > 10));   // aqui estamos usando uma função anonima (JEITO MAIS UTILIZADO PARA FAZER FILTER)

// quando a função só tem uma linha o returna já é impricito, então não precisa colocar o return


console.log(numerosFiltrados2);



console.log('########################################')



//Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];


const pessoasFiltradas = pessoas.filter(pessoas => (pessoas.nome.length >= 5)); // aqui estamos retornando pessoas que tem o nome com 5 letras ou mais.

const pessoasFiltradas2 = pessoas.filter(pessoas => (pessoas.idade > 50)); // Retornando pessoas com mais de 50

const pessoasFiltradas3 = pessoas.filter(pessoas => (pessoas.nome.toLowerCase().endsWith('a'))); // Retornando pessoas cujo nome termina com a

// toLowerCase() -- para deixar tudo em minusculo, caso tenha algum nome com letra maiuscula
// endsWith('a') -- para verificar se o nome termina com a letra 'a'



console.log(pessoasFiltradas);
console.log(pessoasFiltradas2);
console.log(pessoasFiltradas3);