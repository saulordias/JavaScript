//Como criar funções


/* Exemplo de função simples.  -- com apenas um dado. 

function saudacao(nome) {
return `Bom dia ${nome}`; // ela está retornando o valor completo. 

}

//saudacao('Maria'); // Você pode reutilizar a função
//saudacao('Luiz');


const variavel = saudacao('Saulo')
console.log(variavel);
*/



///////////////////////CRIANDO UMA FUNÇÃO COM DOIS DADOS///////////////////////////
/*
function soma(x, y){ 
const resultado = x + y;
return resultado; // tudo que estiver abaixo de return não será executado. 
}

/*
console.log(soma(10,10));
console.log(soma(20,20));
console.log(soma(30,30));
*/

// Outro exemplo


//Tudo que está dentro da função, está "seguro dentro dela" -- no exemplo abaixo usamos a mesma variável do que está dentro da função e não dá nenhum erro.
/*
const resultado = soma (2,2);
console.log(resultado);
*/

/////////////////////////////////////FIM FUNÇÃO DE DOIS DADOS////////////////////////////////////////////////

/////////////////////////////////////FUNÇÃO DEFININDO DADOS -- CASO NÃO SEJA PASSADO VALOR A ELA /////////////////////////////////////
/*
function soma(x = 1, y = 1){ 
const resultado = x + y;
return resultado;
}


const resultado = soma();  //Passando a função sem valores -- ele retorna NaN -- Obrigatório que todos os valores da função sejam enviados. 
console.log(resultado);

// Nesse caso não seria NaN pois definimos valores para 'X'e'Y' ou seja -- SE NÃO TIVER VALORES O QUE FOI PASSADO SERÁ ASSUMIDO NA FUNÇÃO!
*/

/////////////////////////////////////FIM FUNÇÃO DEFININDO DADOS /////////////////////////////////////


/////////////////////////////////CRIANDO UMA FUNÇÃO DENTRO DE UMA VARIÁVEL////////////////////////////
/*
const raiz = function (n){
return n ** 0.5;
};

console.log(raiz(9));
*/
//////////////////////////////////////////////FIM DE FUNÇÃO////////////////////////////////////////////

/////////////////////////////////////////////FUNÇÃO -- ARROW FUNCTION/////////////////////////////////
/*

const raiz = (n) => n ** 0.5; // Essa é uma função de uma linha só -- se tiver mais de uma linha precisa usar chaves.

console.log(raiz(9));

*/
/////////////////////////////////////////////FIM DE FUNÇÃO -- ARROW FUNCTION/////////////////////////////////

