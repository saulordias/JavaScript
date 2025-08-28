// Composição entre classes é quando uma classe "tem" outra classe, ou seja, uma classe é composta por outras classes. Isso é diferente de herança, onde uma classe "é" outra classe.

export class Carro {
    private readonly motor: Motor = new Motor(); // Aqui a classe Carro "tem" um Motor, ou seja, Carro é composto por Motor.

    ligar(): void {
        this.motor.ligar();
    }
    
    acelerar(): void {
        this.motor.acelerar();
    }
    
    parar(): void {
        this.motor.parar();
    }

    desligar(): void {
        this.motor.desligar();
    }
    
}

export class Motor {
    ligar(): void {
        console.log('Motor ligado');
    }
    
    acelerar(): void {
        console.log('Motor acelerando');
    }
    
    parar(): void {
        console.log('Motor parado');
    }

    desligar(): void {
        console.log('Motor desligado');
    }

}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();