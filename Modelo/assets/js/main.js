
function meuEscopo() {

    const form = document.querySelector('.forma');
    const resultado = document.querySelector('.resultado');



    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = Number(form.querySelector('input[name="peso"]').value);
        const altura = Number(form.querySelector('input[name="altura"]').value);


        const imc = peso / (altura * altura);
        
        console.log(imc.toFixed(2));


        if (imc <= 18.5) {



        }

    };




    form.addEventListener('submit', recebeEventoForm);

};


meuEscopo();


