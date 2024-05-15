//Write your code here
function submitfn(event) {
    event.preventDefault();
    const inputValue = document.querySelector('.todo-input').value;
    if (inputValue.trim() !== '') {
        addTask(inputValue);
        document.querySelector('.todo-input').value = '';
    }
}

function addTask(taskName) {
    const todoList = document.querySelector('.todo-list');
    const newTask = document.createElement('li');
    newTask.classList.add('todo-item');
    newTask.innerHTML = `
        <span>${taskName}</span>
        <button class="complete-btn" onclick="completeTask(event)">Complete</button>
        <button class="trash-btn" onclick="deleteTask(event)">Delete</button>
    `;
    todoList.appendChild(newTask);
}

function completeTask(event) {
    const task = event.target.parentElement;
    task.classList.toggle('completed');
}

function deleteTask(event) {
    const task = event.target.parentElement;
    task.remove();
}
