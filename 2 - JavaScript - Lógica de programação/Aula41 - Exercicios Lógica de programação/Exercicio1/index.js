//Escreva uma função que recebe dois números e retorne o maior deles. 

///// Resultado criado pelo Saulo


const num1 = 100;
const num2 = 500;
const resultado = verifica(num1,num2); 

function verifica (x, y){

    if (num1 > num2){
        return `A primeira Opção é número maior: ${num1}`;
    } else if (num2 > num1){
        return `A segunda opção é o número maior: ${num2}`;
    } else {
        return `Ambos são iguais. Opção 1: ${num1}, Opção 2: ${num2} `;
    }

}

console.log(resultado);


console.log('############');

// Opção passada pelo professor

function max (x, y){
    if (x > y) return x; // como é uma analise pequena.. fez tudo na mesma linha
    return y; // como ele só fez duas opções de retorno .. ele não usa else. 
}

console.log(max(10, 2)); // aqui ele já chama direto a funçção, pois não será utilizada em outro lugar. 

////////////////////////////////////////////////////////////////

console.log('############');


//Outro exemplo


function max2 (x, y){
    return x > y ? x : y; // Fez toda a lógica usando operação ternaria
}

console.log(max2(1000, 2000)); // aqui ele já chama direto a funçção, pois não será utilizada em outro lugar.

////////////////////////////////

console.log('############');


//Outro exemplo usando Arrow Function


const max3 = (w, z) => w > z ? w : z; // Fez toda a lógica usando operação ternaria e Arrow function


console.log(max3(1000, 2000)); // aqui ele já chama direto a funçção, pois não será utilizada em outro lugar.
