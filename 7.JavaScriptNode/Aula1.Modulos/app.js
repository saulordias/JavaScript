// Forma de importar
/*
const mod1 = require('./mod1'); //  Aqui estamos importando o módulo mod1

console.log(mod1.falaNome());


// importanto somente uma chave

const falaNome = require('./mod1').falaNome;

console.log(falaNome());

// outro exemplo

const mod2 = require('./mod1'); //  Aqui estamos importando o módulo mod1
const falaNome1 = mod2.falaNome;

console.log(falaNome1());

// 

const { nome, sobrenome, falaNome } = require('./mod1');

console.log(nome, sobrenome, falaNome());


*/

///////////////////////// OUTRO EXEMPLO ///////////////////////////////

// Aqui estamos importando a classe Pessoa do módulo mod1

const path = require('path');
const axios = require('axios');
const { Pessoa } = require ('./mod1');

// estamos usando axios para fazer uma requisição HTTP para obter dados de um arquivo JSON hospedado no GitHub
axios('https://github.com/saulordias/JavaScript/blob/main/6%20-%20JavaScript%20Ass%C3%ADncrono/Aula91%20-%20Fetch%20API%20e%20Axios%20(JSON)/pessoas.json')
.then( response => console.log(response.data))
.catch( e => console.log(e));


// Assim como path o axios é um módulo nativo do Node.js, que permite fazer requisições HTTP de forma fácil e rápida, sem precisar estar no modulo mod1.js