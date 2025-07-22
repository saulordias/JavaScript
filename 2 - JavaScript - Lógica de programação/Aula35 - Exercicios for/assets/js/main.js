const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];


const container = document.querySelector('.container'); // Selecionei o container
const div = document.createElement('div'); // aqui estou criando uma div

for ( let i = 0; i < elementos.length; i++){ // aqui eu criei o itera
    let {tag, texto} = elementos[i]; // fiz a desestruturação do Array
    let tagCriada = document.createElement(tag); // aqui estou criando as tags no HTML
    let textoCriado = document.createTextNode(texto); // criando um nó de texto
    tagCriada.appendChild(textoCriado); // Adiciona os textos as tags criadas
    div.appendChild(tagCriada); // Adiciona as tags a div

}

container.appendChild(div); // Adiciona a div ao container




//////////////////// REFIZ DE CABEÇA ACIMA A LOGICA USADA PELO PROFESSOR /////////

/*
const container = document.querySelector('.container'); // Seleciona o container onde os elementos serão inseridos
const div = document.createElement ('div'); // Cria uma div

// Itera sobre o array de elementos
for ( let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]; // Desestrutura o objeto para obter tag e texto
    let tagCriada = document.createElement(tag); // Cria um elemento com a tag especificada
    tagCriada.innerText = texto; // como sabemos que o texto é uma string, podemos usar innerText
    //outra forma de fazer isso:
    // let textoCriado = document.createTextNode(texto); // Cria um nó de texto
    //tagCriada.appendChild(textoCriado); // Adiciona o nó de texto ao elemento criado
    div.appendChild(tagCriada); // Adiciona o elemento criado à div
}

container.appendChild(div); // Adiciona a div ao container

*/