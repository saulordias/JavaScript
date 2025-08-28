// Encadeamento Opcional (?.) e Operador de Coalescência Nula (??)

type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
}

const documento: Documento = {
    titulo: 'O titulo',
    texto: 'O texto',
    // data: new Date()
}

console.log(documento.data?.toDateString() ?? 'Não tem data mané')
// console.log(undefined ?? 'Não tem data mané')
// console.log(null ?? 'Não tem data mané')
// console.log(false ?? 'Não tem data mané') // aqui ele já não entra no do lado direito pq false não é null nem undefined

// O operador de coalescência nula (??) retorna o operando do lado direito quando o operando do lado esquerdo é null ou undefined