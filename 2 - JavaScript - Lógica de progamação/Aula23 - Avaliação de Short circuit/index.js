/*

&& -- AND -- RETORNA O VALOR DELE MESMO 
|| -- OR

VALORES QUE AVALIAM EM FALSY
false
0
" " ' ' ` `
null / undefined
NaN

*/

console.log('Saulo Dias' && 0 && 'Maria') // EXEMPLO SE RETORNO EM FALSE


/////////////////////////////EXEMPLO PARA EXECUTAR UMA FUNCTION USANDO AND /////////////////////////////////////////


function falaoi (){
return 'Oi';

}

let vaiExecutar = 'João';

console.log( vaiExecutar && falaoi());

///////////////////// FIM ////////////////////////////////////////////////


/////////////////////////////EXEMPLO PARA EXECUTAR USANDO OR /////////////////////////////////////////


console.log( 0 || false || null || 'Luiz' || true); // ele retorna o primeiro verdadeiro


///////////////////// FIM ////////////////////////////////////////////////

// Exemplo de como usar OR

const corUsuario = 'Vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

//  FIM

// Outro exemplo

const a = 0;
const b = null;
const c = 'false'; // aqui é verdadeiro, pois é considerado string
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // Retorna 'false' pois é o primeiro valor verdadeiro

//  FIM

