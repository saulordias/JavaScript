// Callback -- funções que são executadas quando uma ação ocorre (finaliza)

// Função para gerar número aleatorio de 1000 a 3000
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) +
        min;
    return Math.floor(num);
}


function f1(callback) {
    setTimeout(function () { // simulando um atraso. 
        console.log('f1');
        if (callback) callback(); // aqui ele passe que se existir um callback ele faz o callback ao invés do número aleatório.

    }, 500);
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, 1000);
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, 800);
}

/*
// Criando callback chamado de ''callback hell'
f1(function () {
    f2(function () {
        f3(function () {
            console.log('Ola mundo!');
        });
    });
});
*/

// Exemplo de como melhorar o que acima -- Utilizando Funções de callback

f1(f1Callback);

function f1Callback (){
    f2(f2Callback);
}

function f2Callback (){
    f3(f3Callback);
}

function f3Callback (){
    console.log('Ola mundo!');
}