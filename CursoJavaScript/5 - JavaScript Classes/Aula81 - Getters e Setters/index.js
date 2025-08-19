const _velocidade = Symbol('velocidade'); // Symbol é um tipo de dado primitivo que cria identificadores únicos
// Usado para criar propriedades privadas em classes, evitando conflitos de nomes.
// Propriedades privadas não podem ser acessadas diretamente fora da classe e não podem ser alteradas diretamente.


class Carro {

    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;

    }

    // Exemplo de Setter
    set velocidade(valor) {
        console.log('SETTER');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }


    // Exemplo de Getter
    get velocidade() {  // Getter para acessar a velocidade
        console.log('GETTER');
        return this[_velocidade];

    }


    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }

}

const carro = new Carro('Fusca');

// for (let i = 0; i <= 200; i++){
//     carro.acelerar();
// }

carro.velocidade = 99;

console.log(carro.velocidade);

// A diferença de Getter e Setter é que o Getter é usado para acessar uma propriedade, enquanto o Setter é usado para definir ou modificar uma propriedade.

//////////// OUTRO EXEMPLO /////////////////////////////////////

console.log('//////////// OUTRO EXEMPLO //////////////////////')

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Getter para obter o nome completo
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
    // Setter para definir o nome completo
    set nomeCompleto(valor) {
        valor = valor.split(' '); // usamos o método split para dividir a string em um array de palavras
        this.nome = valor.shift(); // shift remove o primeiro elemento do array e retorna esse elemento
        this.sobrenome = valor.join(' '); // join junta os elementos do array em uma string, separando-os por espaço
    }

}

const p1 = new Pessoa('Saulo', 'Dias');
p1.nomeCompleto = 'Maria Silva';
console.log(p1.nomeCompleto);


