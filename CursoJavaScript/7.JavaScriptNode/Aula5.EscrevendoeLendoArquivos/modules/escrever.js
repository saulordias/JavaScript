const fs = require ('fs').promises; // precisamos declarar o fs como uma promessa para usar o método writeFile, que é assíncrono

module.exports = (caminho, dados) => { //esse caminho vem do app.js, onde passamos o caminho do arquivo e os dados que queremos escrever no arquivo

    fs.writeFile(caminho, dados, { flag: 'w'}); //whiteFile é usado para escrever em um arquivo de forma assíncrona, o primeiro parâmetro é o caminho do arquivo, o segundo é o conteúdo a ser escrito, o terceiro é um objeto com opções, onde flag: 'w' indica que queremos escrever (write) no arquivo, se o arquivo já existir ele será sobrescrito, e encoding: 'utf-8' indica a codificação do arquivo
    // 
    

};







