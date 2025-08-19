/*
module.exports = function (x,y){
    return x * y;
};
*/

// Exportando uma class


module.exports = class Cachorro {
    constructor(nome){
        this.nome = nome;
    }

latir(){
    console.log(`${this.nome} está latindo!`);
}
    
}



