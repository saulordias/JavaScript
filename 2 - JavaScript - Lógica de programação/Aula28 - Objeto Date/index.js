// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
/*
const data = new Date(); // aqui estamos criando um objeto Date com a data atual
 */

/*
const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milissegundos
const umDia = 60 * 60 * 24 * 1000; // 1 dia em milissegundos
const data = new Date (0 + tresHoras + umDia); // 01/01/1970 00:00:00 UTC timestamp unix ou epoca unix
 console.log(data.toString());
*/

/*
const data = new Date(2019, 3 , 14, 15, 14, 27, 500); 
//                    Ano,mes,dia,hora,min,seg,mil.s     
console.log(data.toString());
*/

//// Outra forma de mandar data --- como string 
/*
const data = new Date ('2019-04-20 20:20:59')
console.log(data.toString());
*/

/*
// Como obter informações de uma data específica
const data = new Date ('2019-04-20 20:20:59')
console.log('Dia', data.getDate()); // getDate() retorna o dia do mês (1-31)
console.log('Mês', data.getMonth() + 1); // getMonth() retorna o mês (0-11), por isso somamos 1
console.log('Ano', data.getFullYear()); // getFullYear() retorna o ano completo
console.log('Hora', data.getHours()); // getHours() retorna a hora (0-23)
console.log('Minutos', data.getMinutes()); // getMinutes() retorna os minutos (0-59)
console.log('Segundos', data.getSeconds()); // getSeconds() retorna os segundos (0-59)
console.log('Milissegundos', data.getMilliseconds()); // getMilliseconds() retorna os mil
console.log('Dia da semana', data.getDay()); // getDay() retorna o dia da semana (0-6), onde 0 é domingo
console.log(data.toString());
console.log(Date.now()); // Date.now() retorna o timestamp atual em milissegundos desde 01/01/1970
*/

///////////// Criando uma function para formatar a data /////////////////////////////////

function zeroEsquerda (num){
    return num >= 10 ? num : `0${num}`; // aqui estamos verificando se o número é maior ou igual a 10, se sim, retorna o número, caso contrário, adiciona um zero à esquerda
}


function formataData(data){
    //console.log(data);
    const dia = zeroEsquerda (data.getDate());
    const mes = zeroEsquerda (data.getMonth() + 1);
    const ano = zeroEsquerda (data.getFullYear());
    const hora = zeroEsquerda (data.getHours());       
    const minu = zeroEsquerda (data.getMinutes());
    const seg = zeroEsquerda (data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minu}:${seg}`; // aqui estamos formatando a data no formato dd/mm/aaaa hh:mm:ss
}

const data = new Date();
const dataBrasil = formataData(data); // aqui estamos chamando a função formataData e passando a data atual como parâmetro
console.log(dataBrasil); // aqui estamos imprimindo a data formatada no console