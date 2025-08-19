const form = document.querySelector('#formulario'); // captura o formulário pelo ID

form.addEventListener ('submit', function (e){  // adiciona um evento de submit ao formulário
e.preventDefault (); // previne o comportamento padrão do formulário, que é recarregar a página
const inputPeso = e.target.querySelector('#peso');  // aqui estamos pegando o elemento do imput pelo ID
const inputAltura = e.target.querySelector('#altura'); // aqui estamos pegando o elemento do imput pelo ID

const peso = Number(inputPeso.value); // Aqui estamos pegando o valor do imput
const altura = Number(inputAltura.value); // Aqui estamos pegando o valor do imput

if (!peso){
    setresultado('Peso inválido', false); // se o peso for inválido, exibe uma mensagem de erro
    return;
}

if (!altura){
    setresultado('Altura inválida', false); // se a altura for inválida, exibe uma mensagem de erro
    return;
}

const imc = getImc (peso, altura); // aqui estamos chamando a função getImc que calcula o IMC
const nivelImc = getNivelImc (imc); // aqui estamos chamando a função getNivelImc que verifica o nível do IMC

const msg = `Seu IMC é ${imc} (${nivelImc})`; // aqui estamos criando uma mensagem com o IMC e o nível do IMC


setresultado(msg,true); // aqui estamos chamando a função setresultado que exibe a mensagem na tela


});

// Função verificar qual o nível do IMC
function getNivelImc (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // aqui estamos criando um array com os níveis do IMC

    // COMO CADA IF POSSUI UM RETURN, NÃO É NECESSÁRIO UM "ELSE IF"; 

    if (imc >= 39.9) return nivel[5];  // realizamos de tras para frente por conta dos returns
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

// Função para calcular IMC
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};


// Função para criair um paragráfo
function criap (){
  const p = document.createElement ('p'); //createElement cria um elemento HTML, nesse caso um parágrafo
    return p;
}

// Função para criar msg no HTML utilizando paragráfo e já incluind a class. 
function setresultado (msg, isValid){  

    const resultado = document.querySelector('#resultado'); //aqui ele está pegando o resultado
    resultado.innerHTML = '';

    const p = criap (); // aqui ele está chamando a função criap que faz a criação do parágrafo
    p.innerHTML = msg; // aqui ele está colocando a msg dentro do parágrafo
    resultado.appendChild(p); // aqui ele está adicionando o parágrafo dentro do resultado
    

    // aqui ele está verificando se a msg é válida ou não, e adicionando a classe correspondente
    if (isValid){
         p.classList.add('paragrafo-resultado'); // classList.add adiciona uma classe ao elemento
    } else {
        p.classList.add('bad');

    }   
        


    // resultado.innerHTML = `<p>${msg}</p>`;

}

