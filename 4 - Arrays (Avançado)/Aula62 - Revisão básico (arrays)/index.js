
//                0         1         2
const nomes = ['Saulo', 'Leticia', 'Joana', 'Maria', 'João', 'Pedro', 'Paulo'];

// const nomes = new Array('Saulo', 'Leticia', 'Joana'); // ele é menos usado


nomes[2] = 'João';

console.log(nomes);

delete nomes[2]; // removendo o nome João mas mantendo o indice
console.log(nomes);


// Valores são passados por referencia

// exemplo

const novo = nomes;

novo.pop(); // removendo o dado do array

const removido = nomes.pop(); // pop remove do final
console.log(removido); // salvando o dado que foi removido com o pop em uma variável


console.log(nomes);
console.log(novo); // ambos perderam o valor na memória

// como copiar os valores 

const novo2 = [...nomes]; // aqui ele copiou todo o array e qualquer alteração no array anterior não reflete nesse. 

// pegar o tamanho do array

console.log(nomes.length);

// removendo e deslocando os dados

const removido2 = nomes.shift(); // shift remove do começo
console.log(removido2);
console.log(nomes); // aqui mostra a alteração dos indices.

// adicionando coisas no final do Array

nomes.push('ESTOU ADICIONANDO NO FINAL');
console.log(nomes);

// Adicionando no inicio do array ( não é muito utilizado pos altera todos os indices)

nomes.unshift('ESTOU ADICIONANDO NO INICIO');
console.log(nomes);

// para fatiar o array

const novo3 = nomes.slice(1,3); // pegando do indice 1 ao 3
console.log(novo3);

// convertendo uma string em um array

const nome4 = 'SAULO RODRIGUES DIAS';

const nomes2 = nome4.split(' '); // aqui ele está separando por espaço ( possivel separar por virgulas, pontos. )
console.log(nomes2);

// como fazer o array se tornar uma string novamente

const nomes3 = [ 'SAULO', 'RODRIGUES', 'DIAS' ];
const nome5 = nomes3.join(' ');
console.log(nome5);