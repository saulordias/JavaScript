type Veiculo = {
    marca: string;
    ano: number;
}

type Car = {
    brand: Veiculo['marca'];  // Isso se chama Index Access Types -- Chaves em Tipos
    year: Veiculo['ano'];
    name: string;
}

const carro: Car = {
    brand: 'Ford',
    year: 2020,
    name: 'Ka'

}

console.log(carro);