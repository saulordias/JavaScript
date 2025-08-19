// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');

// I significa index -- padrão.. todos usão para repetição
/*
for (let i = 0; i <= 5; i++) {  // Se quiser pode pular mais de um usando 'i+=10' nesse exemplo pularia de 10 em 10 
  
console.log(`Linha ${i}`);
}
*/

/*
///////////// Verificando se é par ////////////////////

for (let i = 0; i <= 10; i++) {  

    const par = i % 2 === 0 ? 'par' : 'impar';
  
console.log( i, par);
}

//////////////////////////////////////////

*/



/// Utilizando um Array //////

//                 0       1      2
const frutas = ['maça', 'pêra', 'uva']

// console.log(frutas.length); para verificar o tamanho do array


for (let i = 0; i < frutas.length; i++) {  
  
console.log(`índice ${i}`, frutas[i]); // vai exibir cada fruta do array e o índice correspondente

}

//////////////////////////////////////////