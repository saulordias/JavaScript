//Exemplo de clousure

function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Saulo');
const funcao2 = retornaFuncao('Dias');


console.dir(funcao); // é a mesma coisa que o console.log
console.dir(funcao2); // é a mesma coisa que o console.log


console.log(funcao(), funcao2());

// Closure é a habilidade que a função tem de acessar o seu escopo léxico.