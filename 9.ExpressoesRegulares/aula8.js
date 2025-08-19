// RETROVISORES COM MATCH E REPLACE

const {html2} = require ('./base.js');

// $1  $2  $3     -----> Retrovisores

//
//<p>Olá denovo mundo</p>




// console.log(html2.match(/<(\w+).*?>.+?<\/\1>/g)); // Para selecionarmos tudo do hmlt incluind class.... etc


// console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g)); // Utilizamos o [\s\S] para pegar tudo, incluindo quebras de linha

// ?: com essa expressão você prede pra ele não contar um grupo


console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHAHA $3 HAHAHAHA $4')); // Utilizando grupos e retrovisores para substituir o conteúdo dentro das tags HTML






