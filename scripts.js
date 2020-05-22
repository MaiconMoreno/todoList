let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let botao = document.querySelector('button.botao');


// let todos = [
//     'Fazer Café',
//     'Estudar JavaScript',
//     'Acessar a comunidade da Rocketseat'
// ];


let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {

    listElement.innerHTML = '';

    for (todo of todos) {

        let todoElement = document.createElement('li');  // criando as li
        let todoText = document.createTextNode(todo); // irá pegar cada item do array 

        let linkElement = document.createElement('a');   //criando tag a 
        linkElement.setAttribute('href', '#');

        let posicao = todos.indexOf(todo); // retorno a posição atual do Array 

        linkElement.setAttribute('onclick', 'deletaTodo(' + posicao + ')');


        let linkText = document.createTextNode('Excluir'); // criando texto do botão 

        linkElement.appendChild(linkText);   //adicionando texto na tag a

        todoElement.appendChild(todoText);  //adicionando texto nas li 
        todoElement.appendChild(linkElement); // adicinando o link na li

        listElement.appendChild(todoElement)  // adicionando todo na ul

    }
};

renderTodos();


botao.onclick = function addTodo() {

    let todoText = inputElement.value;


    verificaCampo = todoText.trim() != '';

    if (verificaCampo) { todos.push(todoText) };

    inputElement.value = '';

    renderTodos();

    SalvandoStoge();

};



function deletaTodo(posicao) {

    todos.splice(posicao, 1);
    renderTodos();

    SalvandoStoge();
};


function SalvandoStoge() {

    localStorage.setItem('list_todos', JSON.stringify(todos));
}
