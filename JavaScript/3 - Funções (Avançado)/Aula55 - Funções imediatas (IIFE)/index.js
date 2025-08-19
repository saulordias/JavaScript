// IIFE --> Immediately invoked function expression 

(function(idade, peso, altura){

    const sobrenome = 'Dias'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

function falaNome(){

    console.log(criaNome('Saulo'));
}

falaNome();
console.log(idade, peso, altura);

})(30, 80, 1.80);


