function relogio (){ // criamos uma função para tirar do escopo global.



// Função para criar a hora dos segundos
// Esta função recebe os segundos e retorna uma string formatada como hora (HH:MM:SS)
function criaHoraDosSegundos(segundos) { // esse segundos vem do setInterval pois sem ele não teria como contar os segundos.
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}


const relogio = document.querySelector('.relogio');
/*  COMO ESTAMOS JÁ SELECIONANDO OS BOTÕES PELO document.addEventListener NÃO É NECESSÁRIO A AÇÃO ABAIXO
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
*/
let segundos = 0;
let timer;


// Função para iniciar o relógio
// Esta função usa setInterval para atualizar o relógio a cada segundo
function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++; // acrescentando segundos
        relogio.innerHTML = criaHoraDosSegundos(segundos); // Esta usando as função que já passa 00:00:00 -- envolvendo os segundos.
    }, 1000);
}
/*
// criando uma função para pegar o clique no botão
iniciar.addEventListener('click', function (event) {  // aqui ele está pegando o evento 'Clique' do botão
    relogio.classList.remove('pausado'); // removendo a classe criado no css para deixar a cor vermelha
    clearInterval(timer); // aqui ele para o timer ativo.. para não iniciar dois timer juntos.
    iniciaRelogio();
});

pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.add('pausado'); // incluindo a cor vermelha quando pausado. 
});

zerar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
*/
///////////// OUTRA FORMA DE FAZER a captura dos botões acima utilizando  addEventListener

document.addEventListener('click', function (e) {
    const el = e.target; // aqui estamos pegando o elemento que está sendo clicado na página

    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }

    if (el.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado'); // incluindo a cor vermelha quando pausado. 
    }

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado'); // removendo a classe criado no css para deixar a cor vermelha
        clearInterval(timer); // aqui ele para o timer ativo.. para não iniciar dois timer juntos.
        iniciaRelogio();
    }

});

}

relogio(); // chamando a função criada.