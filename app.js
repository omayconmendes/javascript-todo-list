// Seletores
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Events
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event){

    // Prevent formu submitting
    event.preventDefault()
    
    // Creating Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo);

    // ================ Adicionando todos ao LocalStorage ================
    saveLocalTodos(todoInput.value);

    // Creating mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

    // Creating trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton)

    // Append to list
    todoList.appendChild(todoDiv);

    // Clear Todo Input Value
    todoInput.value = '';

}

function deleteCheck(event) {
   
    const item = event.target;
    // console.log(item)

    // Delete
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;

        // ========== Remove LocalStorageTodos ==============================
        removeLocalTodos(todo)
        
        todo.remove()
    }

    // Check Mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

function saveLocalTodos(todo){

    // Verifica se já existem Todos salvos em localStorage
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    // Adicionando nosso item ao array todos e salvando no localStorage
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

}

function getTodos(){

    // Verifica se já existem Todos salvos em localStorage
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach( (todo) => {
        // Creating Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo);

    // Creating mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

    // Creating trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton)

    // Append to list
    todoList.appendChild(todoDiv);
    })

}

function removeLocalTodos(todo){
    
    let todos;
    
    // Verifica se já existem Todos salvos em localStorage
    if(localStorage.getItem('todos') === null) {

        // Se não houver, ele iniciará a variárvel todo com um array
        todos = [];
    } else {
        // Se houver, ele buscará os todos que já estão no localStorage
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    // Busca o index do item removido
    const todoIndex = todo.children[0].innerText;

    // Remove o item do array, de acordo com o index recebido 
    todos.splice(todos.indexOf(todoIndex), 1);

    // Atualiza o array no localStorage
    localStorage.setItem('todos', JSON.stringify(todos))

}