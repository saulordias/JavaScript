const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); // NODELIST

const estilosBody = getComputedStyle(document.body); // Aqui pegamos todos os estilos computados no CSS do BODY
const backGroundColorBody = estilosBody.backgroundColor; // aqui pegamos especificamente no Body a cor do background

console.log(backGroundColorBody);

for (let op of ps){
    op.style.backgroundColor = backGroundColorBody; // Colocando as cores do Body no fundo dos paragráfos.
    op.style.color = '#ffffff'; // mudando a cor das letras dos paragráfos para branco
}

