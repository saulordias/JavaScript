const fs = require ('fs').promises;

module.exports = (caminho) => fs.readFile(caminho, 'utf-8');

// O readFile é usado para ler o conteúdo de um arquivo, o primeiro parâmetro é o caminho do arquivo, o segundo é a codificação do arquivo, que neste caso é 'utf-8'. A função retorna uma Promise que resolve com o conteúdo do arquivo.

// promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu resultado. No caso do readFile, a Promise será resolvida com o conteúdo do arquivo lido, ou rejeitada se ocorrer um erro durante a leitura do arquivo.
