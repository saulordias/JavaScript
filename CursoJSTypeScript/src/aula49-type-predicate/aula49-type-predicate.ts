export function isNumber(value: unknown): value is number { // Type Predicate
    return typeof value === 'number';
}

// quando uma função retorna um booleano, podemos usar o Type Predicate para informar ao TS qual o tipo do valor retornado

export function soma<T> (...args: T[]): number{
    const retorno = args.reduce((som, value) => {
        if (isNumber(som) && isNumber(value)){
            return som + value;
        }
        return som;
    }, 0);

    return retorno;
    
}


console.log(soma(1,2,3,4));