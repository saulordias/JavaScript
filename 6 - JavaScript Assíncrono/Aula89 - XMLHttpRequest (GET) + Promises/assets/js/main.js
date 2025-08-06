// Função que ira buscar os dados de uma URL usando XMLHttpRequest
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

document.addEventListener('click', e => {  // aqui estamos escutando o evento de click no documento
    const el = e.target; // pegando o elemento que foi clicado
    const tag = el.tagName.toLowerCase(); // pegando o nome da tag do elemento clicado

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }

})

async function carregaPagina(el) {  // função que carrega a página
    const href = el.getAttribute('href'); // utilizamos getAttribute para pegar o href do link clicado

    const objConfig = {
        method: 'GET',
        url: href,

    };

    try {
        const response = await request(objConfig); // aqui estamos esperando a resposta da requisição
        carregaResultado(response); // chamamos a função que coloca o resultado no elemento resultado

    } catch (error) {
        console.log(error);
    }

    

}

//criamos uma função que recebe a resposta da requisição e coloca no elemento resultado
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;

}