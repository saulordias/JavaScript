const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Exemplo de Continue
/*
for (const numero of numeros) {
    if (numero === 2 || numero === 5){ 
        continue;  // O continue pula a iteração atual e continua com a próxima.
    }

//Exemplo de Break
    if (numero === 7){
        break; // O break encerra o loop completamente.
    }

    console.log(numero);   
}
*/
// A DIFERENÇA ENTRE CONTINUE E BREAK:
// O continue pula a iteração atual e continua com a próxima, enquanto o break encerra

// Eles podem ser usados com qualquer estrutura de repetição.. Atenção ao While  e Do While.

//Exemplo com While --- ATENÇÃO AOS CUIDADOS COM O WHILE E DO WHILE

/*
let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        i++; // colocar o i++ antes do continue é importante para evitar um loop infinito.
        continue;  // O continue pula a iteração atual e continua com a próxima.
    }

    //Exemplo de Break
    if (numero === 7) {
        i++; // colocar o i++ antes do break é importante para evitar um loop infinito.
        break; // O break encerra o loop completamente.
    }

    i++; // colocar o i++ após o continue ou break é importante para evitar um loop infinito.
    console.log(numero);
}
*/

console.log('#############');

// Exemplo de Do While

let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2) {
        i++; // colocar o i++ antes do continue é importante para evitar um loop infinito.
        continue;  // O continue pula a iteração atual e continua com a próxima.
    }

    //Exemplo de Break
    if (numero === 7) {
        i++; // colocar o i++ antes do break é importante para evitar um loop infinito.
        break; // O break encerra o loop completamente.
    }

    i++; // colocar o i++ após o continue ou break é importante para evitar um loop infinito.
    console.log(numero);
} while ( i < numeros.length);