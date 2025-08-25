type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade; // Usando o tipo alias Idade
  salario: number;
  corPreferida?: string;
};

type CorRGB = "Vermelho" | "Verde" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto";
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
 nome: 'Saulo',
 idade: 30,
 salario: 200_000, // 200 mil reais
 
}

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa { // Aqui estamos dando um export para a função porque vamos usar ela em outro arquivo

  return { ...pessoa, corPreferida: cor }; // Estamos retornando uma nova pessoa com a cor preferida atualizada
}

console.log(pessoa);
console.log(setCorPreferida(pessoa, 'Azul'));
console.log(setCorPreferida(pessoa, 'Preto'));