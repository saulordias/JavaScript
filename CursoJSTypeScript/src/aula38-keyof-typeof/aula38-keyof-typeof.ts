type CoresObj = typeof coresObj
type CoresChaves = keyof CoresObj

const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
};

function traduzirCor(cor: CoresChaves, cores:CoresObj){ // exemplo de utilizar typeof
    return cores[cor]
}

console.log(traduzirCor('vermelho', coresObj));

// a diferença de type of e key of é 
/*
type CoresObj = typeof coresObj; // retorna o tipo do objeto
type CoresChaves = keyof CoresObj; // retorna as chaves do objeto
*/

