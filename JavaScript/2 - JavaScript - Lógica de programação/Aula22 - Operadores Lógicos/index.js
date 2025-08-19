/*
Operadores de comparação

Maior que:  >
Maior que ou igual á: >=
Menor que: <
Menor que ou igual á: <=
Igualdade : ==  (valor) ******** NÃO UTILIZAMOS
Igualdade estrita: ===  (valor e tipo)
Diferente: != (valor) ******** NÃO UTILIZAMOS
Diferente estrito: !== (valor e tipo)

*/

// Exemplo utilizando "Maior que"

const comp = 10 > 5;
console.log(comp);

// FIM

// Exemplo de "Maior que ou igual á"

const comp1 = 10 >= 5;
console.log(comp1);

// FIM

//  Exemplo "Menor que"

const comp2 = 10 < 5;
console.log(comp2);

// FIM

//  Exemplo "Menor que ou igual á"

const comp3 = 10 <= 5;
console.log(comp3);

// FIM

//  Exemplo "Igualdade estrita"

const num1 = 10; // number
const num2 = '10'; // string
const comp4 = num1 === num2;  //resultado vai ser falso, pois ele verifica o valor e o tipo
console.log(comp4);

// FIM

//  Exemplo "Diferente estrito"

const num3 = 10; // number
const num4 = '10'; // string
const comp5 = num3 !== num4;  //resultado vai ser verdadeiro, pois ele verifica o valor e o tipo
console.log(comp5);

// FIM