/*
// A função definida com  a palavra 'function' tem uma variável especial que se chama 'arguments' que sustenta todos os argumentos enviados
function funcao() {
    let total = 0;

    for (argumento of arguments){   //ele percorre todos os argumentos enviados
        total+= argumento; // soma todos os argumentos
    }
    console.log(total); 
};

funcao(1, 2, 3, 4, 5, 6, 7);

*/

// Exemplo passando menos valores do que os parametros existentes na função

/*
function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);  // se eu não envio um valor ele retorna undefined -- não gera erro. 
    }
    

funcao(1, 2, 3);
*/

// Exemplo de como definir um valor padrão em um dos parametros.
/*
function funcao(a, b) 
    // b = b || 0; // forma de corrigir é colocar um valor padrão

    console.log(a + b);  // se não passar o valor de B o resultado é NaN
    }
    

funcao(2);
*/


/*
// Exemplo de como definir um valor padrão em um dos parametros FORMA MAIS ATUALIZADA

function funcao(a, b = 2, c = 4){ // aqui defimos o valo padrão.. mas se passarmos o valor .. ele assume o valor passado.. o padrão só ser utilizado quando não for passado valor.

    console.log(a + b + c);  
    }
    

funcao(2,10); // estamos passando o valor de a e b 

// funcao(2, undefined, 20); // unica forma de pular um valor para ele assumir o padrão (ex b) para mandar apenas a, c é utilizando undefined

*/


/*
// Fazendo desestruturação nos argumentos utilizando objeto

function funcao({nome, sobrenome, idade}){ 

    console.log(nome, sobrenome, idade);  
    }
    

funcao({nome: 'Saulo', sobrenome: 'Dias', idade: 30}); 

*/


/*
// Fazendo desestruturação nos argumentos utilizando array

function funcao([valor1, valor2, valor3]){ 

    console.log(valor1, valor2, valor3);  
    }
    

funcao(['Saulo', 'Dias', 30]); 

*/


/*
// Exemplo de função express

const conta = function (operador, acumulador, ...numeros){ // utilizando o rest operator os numetos já estão dentro de um array ( ele precisa sempre ser o último)
    for(let numero of numeros){ // precisa ser for of para retornar os valores
    if (operador === '+') acumulador += numero; //aqui está fazendo a conta de + 
    if (operador === '-') acumulador -= numero; //aqui está fazendo a conta de -
    if (operador === '/') acumulador /= numero; //aqui está fazendo a conta de /
    if (operador === '*') acumulador *= numero; //aqui está fazendo a conta de *

} 
    console.log(acumulador);
};

conta('+', 1, 20, 30, 40, 50)
*/


// Não existe 'arguments' em arrow function

const conta = (...args) => { // args é um array que recebe todos os argumentos enviados
   console.log(args);

} 

conta('+', 1, 20, 30, 40, 50)

//

