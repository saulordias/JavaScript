// Array como generics

type Meutipo = number

const arrayNumeros: Array<Meutipo> = [1, 2, 3];
console.log(arrayNumeros);

//Promisses

async function promiseAsync(){
    return 1;
}

// Promises como generics
// Promise<number> --- o número é o tipo genérico -- Promises são funções assíncronas que retornam uma promessa de que algo vai acontecer
function minhaPromise(): Promise<Meutipo>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
}

promiseAsync().then(resultado => console.log(resultado + 1));
minhaPromise().then(resultado => console.log(resultado + 2));