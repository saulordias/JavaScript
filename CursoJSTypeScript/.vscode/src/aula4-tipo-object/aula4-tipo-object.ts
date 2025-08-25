const objetoA : {
    chaveA: string;
    // readonly chaveB: string; // readonly -- não pode ser alterada
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown; // index signature -- utilizado para permitir chaves adicionais
} = {
    chaveA: 'valorA',
    chaveB: 'valorB',
}

objetoA.chaveB = 'Outro valor';

console.log(objetoA);



