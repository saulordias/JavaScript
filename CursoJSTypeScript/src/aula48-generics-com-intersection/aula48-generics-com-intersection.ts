
export function unirObjetos<T1, T2> (obj1: T1, obj2: T2): T1 & T2 {
    // return {...obj1, ...obj2} // utilizando spread operator
    return Object.assign({}, obj1, obj2) // utilizando Object.assign
}

const obj1 = { chave1: 'valor1'}
const obj2 = { chave2: 'valor2'}
const uniao = unirObjetos(obj1, obj2)
console.log(uniao);