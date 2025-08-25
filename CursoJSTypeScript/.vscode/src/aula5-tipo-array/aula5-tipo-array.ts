// Array<T>

export function multiplicaArgs(...args: Array<number>): number{
    return args.reduce((ac, valor) => ac * valor, 1);

}

const resultado = multiplicaArgs(1, 2, 3);
console.log(resultado);

// Outra forma de usando Array T[]

export function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}

const concarenacao = concatenaString('a', 'b', 'c');
console.log(concarenacao)

// outro exemplo

export function toUpperCase(...args: string[]): string [] {
    return args.map((valor) => valor.toUpperCase());
}

const upperCase = toUpperCase('a', 'b', 'c');

console.log(upperCase);
