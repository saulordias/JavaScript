// LOKAHEAD E LOOKBEHIND (LOOKAROUND)

const {lookahead} = require('./base');


console.log(lookahead);

// console.log(lookahead.match(/.+[^in]active$/gim))



// //POSITIVE LOOKAHEAD (frases que tem active)



// console.log(lookahead.match(/.+(?=[^in]active)/gim)) // Utilizando positivo lookahead


//POSITIVE LOOKAHEAD (frases que tem inactive)

// console.log(lookahead.match(/.+(?=\s+inactive)/gim)) // Utilizando positivo lookahead


//*****************************************************************************


//NEGATIVE LOOKAHEAD (frases que não tem active)



//  console.log(lookahead.match(/^(?!.+[^in]active).+$/gim)) // Utilizando Negative lookahead

 //NEGATIVE LOOKAHEAD (frases que não tem inactive)

//  console.log(lookahead.match(/^(?!.+inactive).+$/gim)) // Utilizando Negative lookahead



//***********************************************************************************


// POSITIVE LOOKBEHIND (frases que começam com ONLINE)


// console.log(lookahead.match(/(?<=ONLINE\s)\S+.*/gim)) // Utilizando positivo lookbehind

//************************************************************************************


// NEGATIVE LOOKBEHIND (frases que NÃO começam com ONLINE)


// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim)) // Utilizando negative lookbehind


//************************************************************************************

const cpf = `
012.250.796-10
111.111.111-11
999.999.999-99
254.224.877-45
147.285.963-10
`


console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}-\d{2}$/gm)) // Aqui estamos utilizando negative lookahead para validar CPF, ou seja, não pode ser repetido 3 vezes o mesmo número e depois o traço com dois números.

















