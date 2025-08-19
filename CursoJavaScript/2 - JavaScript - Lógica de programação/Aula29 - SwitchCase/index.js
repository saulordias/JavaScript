const data = new Date('1987-04-27 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto (diaSemana);


//  Exemplo utilizando IF, Else IF e Else
// if (diaSemana === 0) {
//     diaSemanaTexto = "Domingo";
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda-feira';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça-feira';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta-feira';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta-feira';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta-feira';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = ''; // default
// }

////////////////////UTILIZANDO SWITCHCASE////////////////////////////////
// sempre que você precisar verificar uma unica verialvel.. se é ou não é algo
// switch (diaSemana){
// case 0:
//     diaSemanaTexto = 'Domingo';
//     break;
//     case 1:
//     diaSemanaTexto = 'Segunda';
//     break;
//     case 2:
//     diaSemanaTexto = 'Terça';
//     break;
//     case 3:
//     diaSemanaTexto = 'Quarta';
//     break;
//     case 4:
//     diaSemanaTexto = 'Quinta';
//     break;
//     case 5:
//     diaSemanaTexto = 'Sexta';
//     break;
//     case 6:
//     diaSemanaTexto = 'Sabado';
//     break;
//     default:
//         diaSemanaTexto = "";
// }


/////////////////////////////////// Criando uma FUNTION /////////////////////////////////////////////////

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = "";
            return diaSemanaTexto;
    }

}


console.log(diaSemana, diaSemanaTexto);