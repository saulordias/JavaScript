/*
fetch('pessoas.json')
.then (resposta => resposta.json())
.then (json => carregaElementosPagina(json) );

function carregaElementosPagina (json){
    const table = document.createElement('table');
    for( let pessoa of json) {
        const tr = document.createElement('tr'); // tr é a linha da tabela

        let td = document.createElement('td'); // td é a coluna da tabela
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);
        


        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);

        const resultado = document.querySelector('.resultado'); // aqui pegamos o elemento resultado do HTML
        resultado.appendChild(table);


    }
}

*/

// Trocando para Axios

axios('pessoas.json')
.then (resposta => carregaElementosPagina(resposta.data))


function carregaElementosPagina (json){
    const table = document.createElement('table');
    for( let pessoa of json) {
        const tr = document.createElement('tr'); // tr é a linha da tabela

        let td = document.createElement('td'); // td é a coluna da tabela
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);

        const resultado = document.querySelector('.resultado'); // aqui pegamos o elemento resultado do HTML
        resultado.appendChild(table);


    }
}
 