const flash = require('connect-flash');
const mongoose = require('mongoose');
const validador = require('validator');


const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true }, // Campo obrigatório
    password: { type: String, required: true } // Campo obrigatório

});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {

    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;

    }

    async register() {
        this.valida();
        if (this.errors.length > 0) return;
        try{
            this.user =await LoginModel.create(this.body);
        } catch(e){
            console.log(e);
        }

    }




    valida() {
        this.cleanUp();
        //validação

        // o email precisa ser válido
        if (!validador.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido');
        }

        // a senha precisa ter entre 3 a 8 caracteres
        if (this.body.password.length < 3 || this.body.password.length > 8) {
            this.errors.push('A senha precisa ter entre 3 e 8 caracteres');
        }
    }


cleanUp() {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') { // aqui estamos verificando se o valor é uma string
            this.body[key] = '';
        }
    }

    this.body = {
        email: this.body.email,
        password: this.body.password
    }


}

}



module.exports = Login;
