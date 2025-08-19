
function* geradora1(){
    //código qualquer...
    yield 'valor 1';  // yield é quade igual a return, a diferença é que o return sai fora do código.
    //código qualquer...
    yield 'valor 2';  
    //código qualquer...
    yield 'valor 3'; 

}

const g1 = geradora1();
/* toda vez que você chamar ele vai mostrar o próximo resultado.
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
*/

function* geradora2(){ // essa forma ele não tem um limite.. fica gerando diversos valores.
    let i = 0;

    while(true){ 
        yield i;
        i++;
    }
}

const g2 = geradora2();
/*
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
*/

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3(); // chamando a outra função geradora
    yield 3;
    yield 4;
    yield 5;
}


const g4 = geradora4();

for(let valor of g4){
    console.log(valor);
}


function* geradora5(){

    yield function(){
        console.log('Vim do y1');
    };

    // .....

    yield function(){
        console.log('Vim do y2');
    };
}

const g5 = geradora5();

const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();