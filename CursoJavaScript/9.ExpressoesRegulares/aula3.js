//QUANTIFICADORES

const { texto, arquivos } = require ('./base.js');


// * (opcionais) 0 ou n vezes -- {0,}
// + (obrigatório) 1 ou n vezes
// ? (opcionais) 0 ou n vezes
// \ caractere de escape

// utilizados com *
// {n,m} a quantidade de vezes, o máximo de vezes
// {10,} no minimo 10
// {,10} de 0 a 10 
// {5,10} de 5 a 10 
// {1} pode ser especifico o numero de vezes

// console.log(texto);

// const regExp1 = /Jo+ão+/gi // Desta forma ele ira buscar por João, Joãoo, Joããooo, etc.

// console.log(texto.match(regExp1));

///////////EXEMPLO DE ? ///////////////////////////////////

// const regExp2 = /\.jpe?g/gi

// for (const arquivo of arquivos){
//     const valido = arquivo.match(regExp2);
//     if (!valido) continue;

//     console.log(arquivo, valido );
    
// }


///////////EXEMPLO DE *///////////////////////////////////

const regExp3 = /\.jpe{0,}g/gi

for (const arquivo of arquivos){
    const valido = arquivo.match(regExp3);
  

    console.log(arquivo, valido );
}






