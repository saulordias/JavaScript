/* Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
   Retorne true se a imagem estiver no modo paisagem */



// Resolução do Saulo

function ePaisagem(l, a) {
    if (l === 1080 && a === 566) {
        return true;
    }
    return false;
}

console.log(ePaisagem(1080, 566));

//////////////////////////////////

console.log('#############');

// Fiz outra conclusão usando operação ternaria

function ePaisagem2(l, a) {
    return l === 1080 && a === 566 ? true : false; // Fez toda a lógica usando operação ternari
    };

console.log(ePaisagem2(1080, 566));

//////////////////////////////////////////////////////////////////////////////

console.log('#############');

// Resolução usando Arrow function

const ePaisagem3 = (l, a) => l === 1080 && a === 566 ? true : false;

console.log(ePaisagem3(1080, 566))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('###### RESPOSTAS PROFESSOR #######');

/// RESOLUÇÃO DO PROFESSOR

function eProfessor (largura, altura) {
    return largura > altura ? true : false;   // bem parecido com minha função
}

console.log(eProfessor(1080, 566));

// FIM

console.log('#############');

// Outra resolução

function eProfessor2 (largura, altura) {
    return largura > altura; // Como é boolean, não é necessário o (true ou false) pois essa avaliação já retorna isso.
}

console.log(eProfessor2(1080, 566));

// FIM

console.log('#############');

// Outra resolução usando Arrow function

const eProfessor3 = (largura, altura) => largura > altura;

console.log(eProfessor3(1080, 566))