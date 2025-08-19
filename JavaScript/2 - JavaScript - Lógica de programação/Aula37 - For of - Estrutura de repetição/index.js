// For of 

const nome = 'Saulo Dias'; // string

//Exemplo do for clássico
for (let i = 0; i < nome.length; i++){

    console.log(nome[i]);
}


console.log('################');

// for in 

for (let letras in nome){   // ele retorna o indice
    console.log(letras);
}


console.log('################');


// For of

const nomes = ['Saulo', 'Luiz', 'Henrique']; // Array

for (let valor of nomes){  // ele retorna o valor
    console.log(valor);
}

// For classico -- Geralmente utilizado com iteraveis (Array ou strings)

// For in -- Retorna o índice ou chave (Stings, arrays ou objetos)

// For of -- Retorna o valor em si (iteraveis, arrays ou strings)