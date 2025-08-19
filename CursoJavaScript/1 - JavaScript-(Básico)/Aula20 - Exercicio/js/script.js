function meuEscopo() {
    const forma = document.querySelector('.forma');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = forma.querySelector('nome');
        const sobrenome = forma.querySelector('sobrenome');
        const peso = forma.querySelector('peso');
        const altura = forma.querySelector('altura');


        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value

        })
        
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} `+
        `${peso.value} ${altura.value}</p>`;

    };



    forma.addEventListener('submit', recebeEventoForm);

};

meuEscopo();