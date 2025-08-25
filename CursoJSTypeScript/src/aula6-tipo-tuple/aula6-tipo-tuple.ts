// TUPLE

const dadosCliente1: [number, string] = [1, 'Saulo'];
const dadosCliente2: [number, string, string] = [1, 'Saulo', 'Dias'];
const dadosCliente3: [number, string, string?] = [1, 'Saulo'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Saulo', 'Dias', 'Souza'];



dadosCliente1[0] = 100;
dadosCliente1[1] = 'Dias';

console.log(dadosCliente1);

console.log(dadosCliente2);

console.log(dadosCliente3);

console.log(dadosCliente4);


// Array imutavel (readonly)

const array: readonly string[] = ['Saulo','Dias']
const array2: ReadonlyArray<string> = ['Saulo','Dias']

