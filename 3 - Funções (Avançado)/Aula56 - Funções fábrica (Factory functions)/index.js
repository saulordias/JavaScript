// Factory function (Função fábrica)
// Constructor function (Função construtora)


function criaPessoa (nome, sobrenome, altura, peso){
    return{
        nome, 
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },


        // a diferença entre o getter e o setter é que o getter é utilizado para obter o valor de um atributo, enquanto o setter é utilizado para definir o valor de um atributo
        //Setter

        set nomeCompleto(valor){

            valor = valor.split(' '); // split é utilizado para separar uma string em um array
            this.nome = valor.shift(); // shift remove o primeiro elemento do array e retorna esse elemento
            this.sobrenome = valor.join(' ');
            console.log(valor);

        },

        fala (assunto = 'Falando merda'){
            return `${this.nome} está ${assunto}`; // this é o objeto que está chamando a função, ou seja, o objeto pessoa1
        },
        altura: altura,
        peso: peso,

        // Getter -- Ele 'transforma a função imc em um atributo do objeto
        get imc (){
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Saulo', 'Dias', 1.70, 93);

p1.nomeCompleto = 'Leticia Ribeiro Dias'

console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());


