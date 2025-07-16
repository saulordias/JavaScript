// Array é uma lista de coisas

/*
//           0123456789    ----- Indice de strings
const nome= 'Saulo Dias'
console.log(nome[0]); // para pegar a letra S
*/


//               0        1        2     ---- Indice de Arrays     
const alunos = ['Saulo', 'Maria', 'João']; // Lista de nomes 

/*
console.log(alunos[0]); // para exibir apenas Saulo
*/

/*
alunos[0] = 'Eduardo'; // para trocar o indice '0' por Eduardo -- Alterar
console.log(alunos);
*/

/*
alunos[3] = 'Luiz'; // para adicionar um elemento ao final do Arrays
console.log(alunos);
*/

//console.log(alunos.length); // para sabe o tamanho do Array

/* Para adicionar itens no Array no fim
alunos[alunos.length] = 'Luiz';
alunos[alunos.length] = 'Mikaele';
alunos[alunos.length] = 'Vyvian';
*/

///////////////////////////////// MELHORES FORMAS DE ADICIONAR NO INICIO E NO FIM DO ARRAY ////////////////////////////////////////////////////////

/*  Para adionar itens ao final do Array, sem precisar ver o tamanho dele ** outra forma
alunos.push('Otávio');
alunos.push('Luiz');
*/

/* Para adicionar no INICIO do Array *--- O ultimo adicionado sempre será o primeiro
alunos.unshift('Luiz');
alunos.unshift('Fabio');
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Removendo item do FINAL do Array
alunos.pop(); // para remover o ultimo item do Array
const removido = alunos.pop(); // Assim ele remove o ultimo item e salva em uma variável
console.log(removido);
*/

/* Removendo do INICIO do Array
const removido = alunos.shift()
console.log(removido);
*/

// TODA VEZ QUE VOCÊ REMOVE ITENS DO ARRAY OS INDICES VÃO SE ALTERANDO

/* Como remover item do Array sem alterar os indices -- o indice fica vazio -- ''<1 empty item>''
delete alunos [1];
*/

/*
console.log(alunos[50]); // Acessando algo que não existe -- Ele retorna Undefined
*/

/* Para mostrar fatias do Array
console.log(alunos.slice(0,2)) // Para mostra apenas uma "fatia" array
console.log(alunos.slice(0,-2)) // para fazer a mesma coisa de trás para frente do array
*/

/*
console.log(typeof alunos); // Para mostrar o tipo dos dados do Array -- retorna object
console.log(alunos instanceof Array); // Para verificar se é um Array
*/


console.log(alunos);