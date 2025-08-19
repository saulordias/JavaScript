// JEITO MAIS RÁPIDO DE FAZER // 

const h1 = document.querySelector('.container h1');
const data = new Date();
/* declarando uma variável se quiser 
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
h1.innerHTML = data.toLocaleString('pt-BR', opcoes); // Navegadores modeno não aceitam mais toLocaleDateString


*/
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'}); // Fazendo direto o que está acima



/////////////// RESOLUÇÃO DO SAULO ( DEU CERTO MAIS FOI LONGO)
/*
const data = new Date('2019-10-07 22:52:00')
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
const dia = formataData(data);
const resultado = document.querySelector('.resultado');

resultado.innerHTML = '';
resultado.innerHTML += `<p>${diaSemanaTexto}, ${dia}</p>`;

console.log(dia);







function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`; // aqui estamos verificando se o número é maior ou igual a 10, se sim, retorna o número, caso contrário, adiciona um zero à esquerda
}

// Função para formatar a data
function formataData(data) {
    //console.log(data);
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minu = zeroEsquerda(data.getMinutes());
    let mesFormatado;

    if (mes === 10){
        mesFormatado = 'Outubro';
    }

return `${dia} de ${mesFormatado} de ${ano} ${hora}:${minu}`; // aqui estamos formatando a data no formato dd/mm/aaaa hh:mm:ss

}
// Função para converter em dia da semana
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feria';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = "";
            return diaSemanaTexto;
    }

}
*/