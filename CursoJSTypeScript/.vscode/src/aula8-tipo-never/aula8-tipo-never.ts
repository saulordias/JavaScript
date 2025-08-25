function criaErro (): never{
    throw new Error('Erro na função')
}

criaErro();