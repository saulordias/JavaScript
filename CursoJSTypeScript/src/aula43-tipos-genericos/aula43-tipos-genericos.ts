type FilterCallback<U> = (
    value: U, 
    index?: number, 
    array?: U[]
) => boolean

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
    const novoArray = [];

    for(let i=0; i < array.length; i++){
        if(callbackfn(array[i])){
            novoArray.push(array[i]);
        }
    }



    return novoArray;
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);


const arrayFiltrado = meuFilter(array, (value) => value < 5)


console.log(arrayFiltrado);


// Generics são utilizados para criar componentes reutilizáveis que funcionam com uma variedade de tipos de dados, em vez de um único tipo. Isso permite que você crie funções, classes e interfaces que podem operar em diferentes tipos, proporcionando maior flexibilidade e reutilização de código.


























export{}