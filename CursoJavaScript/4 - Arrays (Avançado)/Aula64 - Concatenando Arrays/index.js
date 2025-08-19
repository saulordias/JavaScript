const a1 = [1, 2, 3, 4, 5];
const a2 = [6, 7, 8, 9, 10];

const a3 = a1.concat(a2);  // concat é usado para concatenar
console.log(a3);

// se quiser na concatenação pode passar mais valores

//ex: 
/*
const a4 = a1.concat(a2, [11, 12, 13], 'Saulo');  
console.log(a4);
*/

// pode mos usar também o '...' (rest/spread)

const a5 = [...a1, ...a2];  // usando spread para espalhar
// const a6 = [...a1, 'Saulo', ...a2, ...[11, 12, 13]]; // outra forma 
console.log(a5);
// console.log(a6);



