export {pessoa}

// VOID é utilizado quando a função ou o metodo não retorna nada

function semRetorno(...args: string[]):void{
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Saulo',
    sobrenome: 'Dias',

    exibirNome():void{
        console.log(this.nome + ' ' + this.sobrenome);
    }
}

semRetorno('Saulo', 'Dias');
pessoa.exibirNome();

