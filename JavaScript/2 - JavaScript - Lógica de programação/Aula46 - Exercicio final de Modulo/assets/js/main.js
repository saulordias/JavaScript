
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// função para criar uma li.. li é uma lista não ordenada
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// evento para capturar o enter no input
// keyCode 13 é o enter
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return; // ele só ira executar se tiver um valor
        criaTarefa(inputTarefa.value); // chama a função para criar a tarefa

    }
});


// função para limpar o input E dar foco nele novamente
// isso é bom para o usuário não precisar clicar no input novamente
function limpaImput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

// Função para criar um botão apagar do lado da lista 
function criaBotaoApagar(li){
    li.innerText += ' '; // O sinal de mais é para adicionar um empaço entre o texto da li e o button
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar'); // forma de adicionar uma class no botão criado
    botaoApagar.setAttribute('class', 'apagar'); // outra forma de adicionar uma class no botão criado --- o setAttribute é usado para definir um atributo no elemento
    botaoApagar.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(botaoApagar);
}




//função para criar uma tarefa -- ela recebe o texto do input e cria uma li com esse texto
function criaTarefa(textoInput) { // esse textoInput é o valor do input -- ele é passado como parâmetro
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaImput(); // chama a função para limpar o input
    criaBotaoApagar(li); 
    salvarTarefas();
}


btnTarefa.addEventListener('click', function () {   // pegando o clique do botão
    if (!inputTarefa.value) return; // ele só ira executar se tiver um valor
    criaTarefa(inputTarefa.value);
});


document.addEventListener('click', function(e){
    const el = e.target;
    
    if( el.classList.contains('apagar')){ // classList é uma propriedade que retorna uma lista de classes do elemento . contains verifica se a classe existe
        el.parentElement.remove(); // Aqui ele vai remover o pai do elemento.
        salvarTarefas(); // estamos salvando novamente, para após apagar ele atualizar no storage.
    }
})

function salvarTarefas (){
    const liTarefas = tarefas.querySelectorAll('li'); // selecionando todos os 'li' das tarefas
    const listaDeTarefas = []; // criando um Array

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText; // pegando o texto da tarefa
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // aqui está redefinindo a veriável já retirando o 'Apagar' que estava retornando. Utilzando replace
        // TRIM É USADO PARA TIRAR O ESPAÇO QUE TINHA APÓS O TEXTO
        listaDeTarefas.push(tarefaTexto);

    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // criando um json em string  que pode ser utilizado depois
    localStorage.setItem('tarefas', tarefasJSON); // Estamos salvando em um espaço do navegador (Só pode ser salvo string, por isso acima convertemos para string)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas'); // aqui estamos pegando do storage as tarefas
    const listaDeTarefas =JSON.parse(tarefas); // aqui estamos convertendo de novo para um objeto javaScript

    for (let tarefa of listaDeTarefas){ // aqui estamos percorrendo o array de tarefas
        criaTarefa(tarefa); // chamando a função para criar a tarefa, passando o texto da tarefa como parâmetro para criar as li's
    }

}

adicionaTarefasSalvas();