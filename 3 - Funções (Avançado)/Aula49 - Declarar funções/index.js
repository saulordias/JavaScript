//Declaração de função (Function hoisting)

falaOi(); // A declaração pode ser feita ou antes da função, pois o motor do javaScript faz esse hoisting e não gerara nenhum erro.

function falaOi(){
    console.log('Oie');
}


// First-class objects (Objeto de primeira classe)
// Function expression -- Você pode tratar a função como um dado
const souUmDado = function(){ // função anonima
    console.log('Sou um dado');
}


// Aqui estamos recebendo uma função e criamos uma função para executala 
function executafuncao (funcao){
    console.log('Vou executar sua função abaixo:')
    funcao ();
}

executafuncao(souUmDado);

// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma Arrow Function');
}

funcaoArrow();

// Dentro de um objecto 

const obj = {
    falar: function(){
        console.log('Estou falando...');
    }
};

obj.falar();

// Outra forma aceita no novo javaScript

const obj2 = {
    falar2 (){        // Criando sem a palavra 'Function'
        console.log('Estou falando 2...');
    }
};

obj2.falar2();

