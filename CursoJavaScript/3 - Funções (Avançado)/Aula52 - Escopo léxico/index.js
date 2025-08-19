const nome = 'Saulo';

function falaNome() {  // tudo que está aqui dentro é o escopo léxico
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Dias'; // mesmo declarando nessa nova função.. ele não altera a primeira função
    

    falaNome();
}

usaFalaNome();