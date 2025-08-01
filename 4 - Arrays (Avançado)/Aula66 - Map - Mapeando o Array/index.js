// A Map altera valores do Array

// dobre os numeros

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// map vai sempre ter o tamanho o array original

const numerosEmDobro = numeros.map (valor => valor * 2);
console.log(numerosEmDobro);



console.log('########################################')



// Pata cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47}

];

console.log('################### OBJETO ORIGINAL #############################');

console.log(pessoas);

console.log('################### OBJETO ORIGINAL #############################');


//Retorne apenas uma string com o nome da pessoa
const nomesString = pessoas.map(obj => obj.nome);
console.log(nomesString);

// Remova apenas a chave "nome" do objeto
const idade = pessoas.map(obj => ({idade: obj.idade}));
console.log(idade);

// Adicione uma chave id em cada objeto

const comIds = pessoas.map(function(obj, indice){
  const newObj = {...obj}; // copiamos o objeto para as alterações não sejam realizadas no OBJ original
  newObj.id = indice;
  return newObj;
})

console.log(comIds);
