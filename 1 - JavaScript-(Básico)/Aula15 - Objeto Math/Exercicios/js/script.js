const numero = Number(prompt('Digite um número')); // convertendo o prompt que vem como string para number direto

// Metodo para ligar a variável ao ID do HTML
const numeroTitulo = document.getElementById('numero-titulo');
const raiz = document.getElementById('raiz');
const nan = document.getElementById('nan');
const arredondaBaixo = document.getElementById('arredondaBaixo');
const arredondaCima = document.getElementById('arredondaCima');
const decimais = document.getElementById('decimais');
numeroTitulo.innerHTML = numero; // mostrando o número digitado no prompt
/*

raiz.innerHTML = `<p> Raiz quadrada: ${numero ** 0.5} </p>`; // mostrando a raiz quadrada do número
nan.innerHTML = `<p>É Nan: ${Number.isNaN(numero)}</p>` // Verificando se "Not a Number"
arredondaBaixo.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}</p>` // Arredondando para baixo
arredondaCima.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numero)}</p>` // Arredondando para cima
decimais.innerHTML = `<p> Com duas casas decimais: ${numero.toFixed(2)}</p>` // mostrando apenas duas casas decimais no número
*/
// Outra forma de fazer é criar tudo dentro de um texto sem precisar criar diversos IDS

const texto = document.getElementById('texto');
texto.innerHTML = ' ';
texto.innerHTML += `<p> Raiz quadrada: ${numero ** 0.5} </p>`;
texto.innerHTML += `<p>É Nan: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}</p>`; 