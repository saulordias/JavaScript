let x = 10;
x = 0b1010;

const y = 10; // Tipo literal numérico

// let a: 100 = 100; // Tipo literal (Não é aconselhavel fazer desta forma)

let a = 100 as const; // forma de ajustar.. mas pouco utilizado também. (Utilizar CONST para declarar)


 
const pessoa = {
 nome: 'Saulo' as const, // Forma de declarar um tipo literal de string
 sobrenome: 'Dias',
}


function escolhaCor (cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
 return cor;
}

console.log(escolhaCor('Vermelho'));

 