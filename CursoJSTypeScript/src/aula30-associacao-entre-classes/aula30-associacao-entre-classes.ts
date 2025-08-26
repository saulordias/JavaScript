export class Escritor {
    private _ferramenta: Ferramenta | null = null
    constructor(private _nome: string) { }

    get nome(): string {
        return this._nome
    }

    get ferramenta(): Ferramenta | null {
        return this._ferramenta
    }


        set ferramenta(ferramenta: Ferramenta | null) {
            this._ferramenta = ferramenta
        }

escrever(): void {
    if(this._ferramenta === null) {
    console.log('Não posso escrever');
    return;
}
this._ferramenta.escrever();
    }

}

export abstract class Ferramenta {
    constructor(private _nome: string) { }
    abstract escrever(): void;

    get nome(): string {
        return this._nome
    }

}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está escrevendo`)
    }
}

export class MaquinaEscrever extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está digitando`)
    }
}


const escritor = new Escritor('Saulo');
const caneta = new Caneta('Bic')
const maquinaEscrever = new MaquinaEscrever('Maquina de escrever')

console.log(escritor.nome)
console.log(caneta.nome)
console.log(maquinaEscrever.nome)

escritor.escrever();
escritor.ferramenta = caneta;
escritor.escrever();