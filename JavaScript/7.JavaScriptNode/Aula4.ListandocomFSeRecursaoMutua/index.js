const fs = require('fs').promises; // Importamos o módulo fs para manipulação de arquivos -- Fs é o módulo de sistema de arquivos do Node.js
const path = require('path'); // Importamos o módulo path para manipulação de caminhos de arquivos -- path é o módulo de caminhos do Node.js

/*
fs.readdir(path.resolve(__dirname))  // Aqui estamos lendo o diretório atual
// utilizamos path.resolve(__dirname) para garantir que estamos no diretório correto

    .then(files => console.log(files))
    .catch(err => console.log(err))

*/

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname) // usamos rootDir para armazenar o diretório atual
    const files = await fs.readdir(rootDir); // Lê os arquivos do diretório atual
    walk (files, rootDir);
}

// Aqui estamos percorrendo os arquivos lidos
// e verificando se são diretórios ou arquivos
async function walk(files, rootDir){ // Walk é usado para percorrer os arquivos
    for(let file of files){ 
        const fileFullPatch = path.resolve(rootDir, file) // Resolvemos o caminho completo do arquivo 
        const stats = await fs.stat(fileFullPatch); // Pegamos as estatísticas do arquivo

        if((/\.git/g.test(fileFullPatch))) continue; // Ignoramos arquivos ou diretórios que contenham .git

        if((/node_modules/g.test(fileFullPatch))) continue; // Ignoramos arquivos ou diretórios que contenham .node_modules

        
        if(stats.isDirectory()){ // Verificamos se é um diretório
            readdir(fileFullPatch); // Caso seja, chamamos a função novamente
            continue;
        }
        
        if(
            !/\.css$/g.test(fileFullPatch) && !/\.html$/g.test(fileFullPatch)
        ) continue; // Verificamos se o arquivo é um CSS e html, caso não seja, continuamos
        
        console.log(fileFullPatch); // Verificamos se é um diretório ou um arquivo
    }
}

readdir('C:/Users/Saulo Dias/Desktop/JavaScript/');