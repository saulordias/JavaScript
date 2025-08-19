// 705.484.450-52      070.987.720-03


class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', { // cria uma propriedade cpfLimpo que não pode ser alterada
            // usamos defineProperty para criar uma propriedade privada
            writable: false, // usado para tornar a propriedade não editável
            enumerable: true, // usado para tornar a propriedade visível
            configurable: false, // usado para tornar a propriedade não configurável
            value: cpfEnviado.replace(/\D+/g, ''), // remove -- o /\D+/g é uma expressão regular que remove todos os caracteres que não são dígitos
        });

    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2); // pega o cpf sem os dois últimos dígitos
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;



    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica); // aqui estamos multiplicando o número pelo seu índice reverso
            reverso--;
        }


        const digito = 11 - (total % 11); // aqui estamos calculando o dígito verificador
        return digito <= 9 ? String(digito) : '0'; // aqui estamos verificando se o dígito é menor ou igual a 9




    }


    // aqui estamos criando uma propriedade privada cpfLimpo que recebe o cpf enviado, mas sem os caracteres especiais como pontos e traços.
    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
        // charAt(0) pega o primeiro caracter da string cpfLimpo
        // repeat(11) repete esse caracter 11 vezes
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.eSequencia()) return false;
        this.geraNovoCpf(); // apenas chama, não verifica retorno

        return this.novoCPF === this.cpfLimpo;

    }

}

// let validaCpf = new ValidaCPF('070.987.720-03');
// //validaCpf = new ValidaCPF('999.999.999-99');

// if(validaCpf.valida()){
//     console.log('CPF Válido');
// } else {
//     console.log('CPF Inválido');
// }

