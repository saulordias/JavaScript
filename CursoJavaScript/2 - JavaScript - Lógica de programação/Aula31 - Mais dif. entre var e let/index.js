const verdadeira = true

let nome = 'Luiz';
var nome2 = 'LUIZ';


/*
let nome = 'Luiz' // se você tenta redeclarar o let ele não permite
var nome2 = 'LUIZ'; // já var ele não gera nenhum erro (esse é o perigo)
*/

if (verdadeira) {
    let nome = 'Otávio' // ele permite a redeclaração desta forma por conta de estar dentro de um bloco
    var nome2 = 'SAULO';

    console.log(nome, nome2);

}

// let só tem escopo de bloco, ou seja, se você declarar uma variável let dentro de um bloco (como if, for, etc), ela só existe dentro daquele bloco.
// var tem escopo de função, ou seja, se você declarar uma variável var dentro de uma função, ela só existe dentro daquela função.
// var também tem escopo global, ou seja, se você declarar uma variável var fora de uma função, ela existe em todo o escopo global.



////////////////// MAIS UM EXEMPLO DE BLOCO ANINHADO //////////////////////////

if (verdadeira) {
    let nome = 'Dias' // ele permite a redeclaração desta forma por conta de estar dentro de um bloco
    var nome2 = 'SAULO DIAS';
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'outra coisa'; // aqui ele vai assumir novamente o nome do bloco
        var nome2 = 'SAULO R DIAS'; // diferente do let.. o var está redeclarando a variável, e o valor dela será a ultima declaração.. note que acima eu redeclarei ela em diversos blocos.. e ele ficou com o valor do ultimo

        console.log(nome, nome2);
    }
}
///////////////////////////////////////////////////////////////////////

console.log(nome, nome2); // aqui vai mostrar o valor da escala GLOBAL de let que é Luiz, e SAULO R DIAS e var.. que foi o ultimo valor que declarei

///////// Escopo de FUNÇÃO//////////////////////////////
/*
var sobrenome = 'Miranda'; // exemplo de veriável de fora da função

function falaoi() {
    var nome5 = 'OUTRA COISA'

    if (verdadeira){

        console.log(sobrenome); // ele vai funcionar pois o var não respeita escopo de bloco, e sim de função

        // já o let não funciona aqui, pois ele respeita o escopo de bloco
    }


    //console.log(sobrenome); // chamando variável de fora da função
}

// console.log(nome5); // se você tentar chamar a a variavel de fora da função ele não funciona.. 

falaoi();
*/
///////////////////

console.log(sobrenome);
var sobrenome = 'Miranda'; // se você declarar a variável depois de chamar ela, não ira gerar um erro, pois o var tem hoisting, ou seja, ele sobe a declaração da variável para o topo do escopo.

// Se fosse let, ele geraria um erro, pois o let não tem hoisting, ou seja, ele não sobe a declaração da variável para o topo do escopo.