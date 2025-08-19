

class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;

    }

    ligar (){
        if (this.ligado){
            console.log(`${this.nome} já está ligado.`);
            return;
        }
        this.ligado = true;

    }
    desligar (){
        if (!this.ligado){
            console.log(`${this.nome} já desligado.`);
            return;
        }
        this.ligado = false;

    }
}

class Smartphone extends DispositivoEletronico { // usando herança com extends
    constructor (nome, cor, modelo)
    {
        super(nome); // super chama o construtor da classe pai (DispositivoEletronico)
        this.cor = cor;
        this.modelo = modelo;
    }
}

// criando uma noca classe que herda de DispositivoEletronico
class Tablet extends DispositivoEletronico {
    constructor (nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }


    // essas classes podem sobrescrever os métodos da classe pai, mas só existem dentro da classe filha.
    ligar (){
        console.log('Você alterou o metodo ligar');
    }
    falaOi (){
        console.log('Oi');
    }

}

const s1 = new Smartphone ('Iphone', 'Preto', 'XR');

const t1 = new Tablet ('iPad', true);

console.log(t1);

t1.falaOi();