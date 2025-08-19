class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e); // utilizamos handleSubmit para lidar com o evento de submit do formulário
        });

    }

    handleSubmit(e) {
        e.preventDefault(); // previne o comportamento padrão do formulário
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas){
            alert('Formulário enviado');
            this.formulario.submit(); // aqui estamos enviando o formulário
        }

    }

    senhasSaoValidas(){
        let valid = true;


        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }

        return valid;

    }


    camposSaoValidos() {
        let valid = true;
        for (let errorText of this.formulario.querySelectorAll('.error-text')) { // aqui estamos removendo o erro anterior após um novo envio do formulário
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco.`);
                valid = false;
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;


                }

             if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;


                }
            }

            return valid;

        }

        validaUsuario(campo){
            const usuario = campo.value;
            let valid = true;

            if(usuario.length < 3 || usuario.length > 12){
                this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.')
                valid = false;

            }
            if(!usuario.match(/[a-zA-Z0-9]+/g)){
                this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números.')
                valid = false;

            }


            return valid;
        }


        // esse método verifica se o campo é um CPF e chama o método validaCPF para validar o CPF
        //Esse validaCPF é outro arquivo js/validaCPF.js que está importado no HTML
    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.valida()){
            this.criaErro(campo, 'CPF inválido');
            return false;
        } 
            return true;
        
        }



    // Metodo para criar um erro
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div); // usamos o insertAdjacentElement para inserir o erro logo após o campo

    }


}



const valida = new ValidaFormulario();