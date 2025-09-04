// Como fazer restrições em generics 

// Para fazer restrições em generics usamos a palavra reservada extends

type ObterChaveFn = <O, K extends keyof O>(object: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (object, chave) => object[chave];

const animal = {
    cor:'Marron',
    vacinas: ['Vacina1', 'Vacina2'],
    idade: 10
};

const vacinas = obterChave(animal, "vacinas");
const cor = obterChave(animal, "cor");

console.log(vacinas, cor, obterChave(animal, "idade"));
