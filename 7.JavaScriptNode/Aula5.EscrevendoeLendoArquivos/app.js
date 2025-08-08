const path = require ('path'); // path é um módulo nativo do Node.js que fornece utilitários para trabalhar com caminhos de arquivos e diretórios
const caminhoArquivo = path.resolve(__dirname, 'teste.json');  //path.resolve é usado para resolver o caminho do arquivo, ali estamos (__dirname) pegando o caminho do diretório atual e indo para o arquivo teste.txt

const escreve = require('./modules/escrever'); // Aqui estamos importando o módulo escrever.js que está na pasta modules
const ler = require('./modules/ler'); // Aqui estamos importando o módulo ler.js que está na pasta modules

/*
// Caminho do arquivo onde queremos escrever os dados

const pessoas = [
    {nome: 'Luiz'},
    {nome: 'Maria'},
    {nome: 'João'},
    {nome: 'Pedro'}
];

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json); // Aqui estamos chamando a função escreve do módulo escrever.js, passando o caminho do arquivo e o conteúdo em formato JSON que queremos escrever no arquivo



//////////// fim //////
*/


/// Aqui estamos lendo o arquivo 

// Essa função lê o arquivo de forma assíncrona usando async/await e retorna o conteúdo do arquivo
async function lerArquivo(caminho){
    const dados = await ler(caminho); // Aqui estamos chamando a função ler do módulo ler.js, passando o caminho do arquivo, que retorna uma Promise que resolve com o conteúdo do arquivo lido
    renderizaDados(dados);
    return dados;

}

// Essa função recebe os dados em formato JSON, faz o parse para transformar em um objeto JavaScript e depois itera sobre o array de objetos, imprimindo o nome de cada pessoa no console
function renderizaDados(dados){
dados = JSON.parse(dados);
dados.forEach(val => console.log(val.nome)); // forEach é um método de array que executa uma função para cada elemento do array
}

lerArquivo (caminhoArquivo);
