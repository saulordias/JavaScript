let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const valorA = varA;
const valorB = varB;
const valorC = varC;

varA = valorB;
varB = valorC;
varC = valorA;

console.log(varA, varB, varC);

// Criei variáveis para não perder os valores.

// outra forma de resultado

[varA, varB, varC] = [varB, varC, varA];