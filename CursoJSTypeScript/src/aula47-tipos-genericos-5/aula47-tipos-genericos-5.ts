// GENERICS COM CLASSES

export class Pessoa<T, U> {
    constructor(public nome: T, public idade: U) {}
}

// Exemplos que ele infere o tipo automático

// const pessoa1 = new Pessoa('Saulo', 30);
// const pessoa2 = new Pessoa(['Saulo'], 30);
// const pessoa3 = new Pessoa(['Saulo'], {idade: 30});
// const pessoa4 = new Pessoa<string, number>('Saulo', 30);

export class Pilha<T> {
    private contador = 0;
    private elementos: { [k: number]: T } = {}; // utilizamos uma signatura de array

    push(elemento: T) {
        this.elementos[this.contador] = elemento;
        this.contador++;
    }

    estaVazia(): boolean {
        return this.contador === 0;
    }



    pop(): T | null {
        if (this.estaVazia()) return null;

        this.contador--;
        const elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    }

    tamanho(): number {
        return this.contador;
    }

    mostrarPilha() {
        for (const chave in this.elementos){
            console.log(this.elementos[chave]);
        }
    }
}


const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);

pilha.mostrarPilha();


while (!pilha.estaVazia()) {
    console.log(pilha.pop());
}

console.log(pilha.tamanho());
