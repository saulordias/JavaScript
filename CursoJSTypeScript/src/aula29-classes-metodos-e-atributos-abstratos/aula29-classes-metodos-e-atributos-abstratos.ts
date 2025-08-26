export abstract class Personagem {

    protected abstract emoji: string;


    constructor(
        protected name: string,
        protected ataque: number,
        protected vida: number,
    
    ) {}

    atacar (personagem: Personagem): void {
        this.bordao();
        personagem.perderVida(this.ataque)

    }

    perderVida (forçaAtaque: number): void {
        this.vida -= forçaAtaque
        console.log(`${this.emoji} - ${this.name} agora tem ${this.vida} de vida!`)
        
    
    }

    abstract bordao(): void 
}

export class Guerreira extends Personagem {
    protected emoji = '\u{1F9DD}'


     bordao(): void {
        console.log(this.emoji + ' XENA ATACAAANDO!')
    }
}
export class Monstro extends Personagem {
    protected emoji = '\u{1F9DF}'
    bordao(): void {
        console.log(this.emoji + ' HODOOOOR!')
    }
}

const gueirreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

gueirreira.atacar(monstro);
monstro.atacar(gueirreira);
gueirreira.atacar(monstro);
monstro.atacar(gueirreira);
gueirreira.atacar(monstro);
monstro.atacar(gueirreira);