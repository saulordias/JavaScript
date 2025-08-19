// ForEach é um método que executa uma função em cada elemento de um array.
// Ele não retorna nada, apenas executa a função para cada elemento.

const a1 = [10, 20, 30];

a1.forEach(function(valor, indice, array){
  console.log(valor);
})

console.log('################################');


// simulando um reduce

let total = 0;
a1.forEach(valor => {
  total += valor;
});

console.log(total);