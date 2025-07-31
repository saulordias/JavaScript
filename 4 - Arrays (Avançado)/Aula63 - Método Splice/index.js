//              -5       -4      -3      -2      -1                ---- indice negativo
//               0        1       2       3       4
const nome = ['Saulo', 'João', 'Maria', 'Ana', 'Julia'];

// nomes.splice (indice atual, Quantos indices quero remover, elem1, elem2, elem3);

//pop
/*
// assim como pop conseguimos salvar o elemento removido em uma variável.. mas ele volta como um array
const removidos = nome.splice(4, 1); // aqui estamos removendo o valor do indice 4 e mostrando o quanto vai ser removido.
console.log(nome, removidos);
*/

/*
// para remover de um indice até o maximo do array

const removidos2 = nome.splice(-2, Number.MAX_VALUE); // assim ele irá começar do incice -2 até o final do array
console.log(nome, removidos2);

*/


/* // aqui estamos removendo o valor do indice 3 e incluindo Leticia no lugar --- podemos adicionar sem retirar um item.. basta colocar 0 no campo de quantos elementos serão removidos.

const removidos3 = nome.splice(3, 1, 'Leticia'); 
console.log(nome, removidos3);

*/


// simulando como se fosse o shift
/*

const removidos4 = nome.splice(0, 1);
console.log(nome, removidos4);

*/


// simulando como se fosse o push 

/*

nome.splice(nome.length, 0, 'Claudio'); // aqui ele vai adicionar no final do array
console.log(nome);

*/

// simulando como se fosse o unshift

nome.splice(0, 0, 'Claudio'); // aqui ele vai adicionar no começo do array
console.log(nome);


