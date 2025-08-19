// Criando uma calculadora


function Calculadora() {

    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');


    this.inicia = function () {

        this.cliqueBotoes();
        this.pressionaEnter();

    };

    this.pressionaEnter = function () {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }

        });
    };

    this.realizaConta = function () {

        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);



        } catch (e) {
            alert('Conta inválida');
            return;

        }
    };

    this.clearDisplay = function () {
        this.display.value = '';
    };

    this.apagaUm = function () {
        this.display.value = this.display.value.slice(0, -1); // Usamos slice para remover o último caracter do display. -- aqui ele está mandando o tamanho da string - 1 
    };

    this.cliqueBotoes = function () {

        document.addEventListener('click', (e) => {  // usando arrow function intencionalmente para o this ser a calculadora.
            const el = e.target; //aqui estamos pegando o que estou clicando na pagina

            if (el.classList.contains('btn-num')) { // Aqui estamos verificando se o botão apertado contem 'btn-num' -- True -- ele chama o btnParaDisplay
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {  // Aqui estamos verificando se o botão apertado contem 'btn-clear' -- True -- ele chama o clear display
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }
            if (el.classList.contains('btn-eq')) {
                this.realizaConta();

            }




        })

    };

    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    };
}

const calculadora = new Calculadora();
calculadora.inicia();
