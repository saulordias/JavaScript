// Exemplo de métodos de instância.

class ControleRemoro {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Exemplo de métodos estáticos.
    static trocaPilha(){
        console.log('Vou trocar');
    }
}

const controle1 = new ControleRemoro('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);



console.log('//////////// OUTRO EXEMPLO //////////////////////')

ControleRemoro.trocaPilha(); // exemplo de como chamamos o método estático


// A diferença entre métodos de instância e estáticos é que os métodos de instância são chamados em uma instância específica da classe, enquanto os métodos estáticos são chamados diretamente na classe, sem a necessidade de criar uma instância. Os métodos estáticos geralmente são usados para funções utilitárias ou para operações que não dependem do estado de uma instância específica.
