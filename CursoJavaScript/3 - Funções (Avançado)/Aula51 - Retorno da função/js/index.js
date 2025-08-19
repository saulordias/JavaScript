/* return 
* retorna um valor
* termina a função
* Temos funções que não retornam valores

*/


function soma(a, b) {
    return a + b;
}

// uma função sem retorno 
function soma2(a, b) {
    console.log(a + b);

}

console.log(soma(5, 2));

soma2(5, 7);


//////////////////////////////////////////////////
/*
// exemplo de função para alterar o background após o clique
document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
});
*/
///////////////////////////////////////
/*
// Exemplo de função para criar um objeto
function criaPessoa (nome, sobrenome){
    return{
        nome, sobrenome
    }
}


// as duas tem o mesmo resultado -- a diferença é que na p1 estamos chamando uma função para fazer esse objeto.
const p1 = criaPessoa('Saulo', 'Dias');
const p2 = {
    nome: 'Saulo',
    sobrenome: 'Rodrigues'
};

console.log(p1);
console.log(p2);

console.log(typeof p1); // resultado object
console.log(typeof p2); // resultado object

*/


// exemplo de função com várias camadas
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

// const olaMundo = falaFrase('Olá');

// console.log(olaMundo('Mundo!'));

// exemplo
const fala = falaFrase('Olá');
const resto = fala('Mundo');

console.log(resto);

//////////////

// Exemplo util para utilizar função acima


// essa função se chama closure, pois ela "lembra" do ambiente onde foi criada, mesmo depois de ser executada.
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);




console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

