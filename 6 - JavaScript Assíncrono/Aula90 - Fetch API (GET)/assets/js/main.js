// Função que ira buscar os dados de uma URL usando XMLHttpRequest

/*
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }


        });

    });
};

*/

document.addEventListener('click', e => {  // aqui estamos escutando o evento de click no documento
    const el = e.target; // pegando o elemento que foi clicado
    const tag = el.tagName.toLowerCase(); // pegando o nome da tag do elemento clicado

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }

})

async function carregaPagina(el) {  // função que carrega a página
    try {
        const href = el.getAttribute('href'); // utilizamos getAttribute para pegar o href do link clicado
        const response = await fetch(href); // aqui estamos usando o fetch para fazer a requisição

        if (response.status !== 200) throw new Error('Erro 404');

        const html = await response.text(); // aqui estamos usando o await para esperar a resposta da requisição
        carregaResultado(html)
    } catch (erro) {
        console.log(erro);
    }
   
    
}

//criamos uma função que recebe a resposta da requisição e coloca no elemento resultado
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;

}




/*

// exemplo de uso do fetch
// fetch é uma API nativa do JavaScript que permite fazer requisições HTTP
// fetch retorna uma Promise que resolve com a resposta da requisição

fetch('pagina4.html')
    .then(resposta => {
        if (resposta.status !== 200) throw new Error('Erro 404 nosso')
        return resposta.text();
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => console.error(e));

    */