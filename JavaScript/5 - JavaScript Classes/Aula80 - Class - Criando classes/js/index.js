// Exemplo usando Class

// class utilizada para criar objetos de forma mais simples e organizada.
// Classes são uma forma de criar objetos e lidar com herança em JavaScript.
class Pessoa {
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    

    }

    falar(){
        console.log(`${this.nome} está falando.`);

    }
    comer(){
        console.log(`${this.nome} está comendo.`);
    }
    beber(){
        console.log(`${this.nome} está bebendo.`);
    }
}

const p1 = new Pessoa('Saulo', 'Dias');
const p2 = new Pessoa('Leticia', 'Dias');
const p3 = new Pessoa('Maria', 'Dias');
const p4 = new Pessoa('Pedro', 'Dias');


console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);




