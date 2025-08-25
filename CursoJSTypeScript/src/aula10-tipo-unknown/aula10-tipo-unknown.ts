let x: unknown; // O unknown é um tipo que pode receber qualquer valor, mas não permite operações diretas sem verificação de tipo.

x = 100;
x = 'Saulo';
x = 900;
x = 10;

const y = 800;

if (typeof x === 'number') {
    console.log(x + y);
}

