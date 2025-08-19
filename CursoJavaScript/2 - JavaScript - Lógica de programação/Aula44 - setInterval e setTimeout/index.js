function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    })
}

// Não é necessário criar uma função apenas para mostrar. Usado só como exemplo
/*
function funcaoDoInterval(){
    console.log(mostraHora());
}
*/

const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000); // Utilizamos para executar uma função de tempos em tempos. -- Aqui definimos de segundo a segundo. (O pararamêtro é passado por MILISEGUNDOS POR ISSO 1000)


setTimeout(function(){
    clearInterval(timer);
}, 10000); // aqui definimos o timeout da função interval -- em 10 seg. (ESSA FUNÇÃO SÓ EXECUTA UMA VEZ.)


setTimeout( function(){
    console.log('Olá Mundo'); // incluindo uma mensagem no timeout. 
}, 5000);