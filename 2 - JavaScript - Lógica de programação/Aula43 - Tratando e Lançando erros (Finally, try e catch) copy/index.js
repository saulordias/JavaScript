try {
    // essa parte do código é executada quando não há erros
    // console.log(A); // Gerando um erro
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {   // criando um try e um catch dentro de outro try
        console.log(b);
    } catch {
        console.log('Deu erro');
    } finally {
        console.log('Tambem sou FINALLY');
    }
} catch (err) {
    // essa parte do código é executada quando há erros
    console.log('Tratando o erro');

} finally {
    // essa parte do código é executada sempre, independentemente de erros
    console.log('FINALLY - Eu sempre sou executado');

}


console.log('########################');

////////////////// Criando um exemplo 

function retornaHora(data) {
    if (data && !(data instanceof Date)) {  // aqui verificamos se data é uma instância de Date
        throw new TypeError('Esperando instância de Date'); // se não for, lança um erro do tipo TypeError
    }

    if (!data) {   // se não for passado nenhum parâmetro, ele cria uma nova data
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', { // aqui ele formata a hora
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Aqui ele está transformando a hora em 24h
    })
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(); // Aqui ele chama a função sem passar nenhum parâmetro, então ele vai usar a data atual
    console.log(hora);
} catch (err) {
 // Tratar erro

} finally{
    console.log('Tenha um bom dia!')

}

