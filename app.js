// Seletores
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Events
todoButton.addEventListener('click', addTodo)

// Functions
function addTodo(event){

    // Prevent formu submitting
    event.preventDefault()
    
    // Creating Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'Hey'
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

}