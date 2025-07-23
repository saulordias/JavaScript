/*

// Try é usado para tratar o erro
try {

console.log(naoexisto);
} catch (err){
    console.log('NãoExisto não esxiste.')
    console.log(err);
}

*/

////////////////////

// Usando THROW para tratar o erro

function soma(x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw new Error('x e y precisam ser números'); // Lançando um erro 

    }
    return x + y;
}

// Usando TRY e CATCH para tratar o erro
try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
    
} catch (err) {
    // console.log(err);
    console.log('Está tudo bem (Mentira)')
}