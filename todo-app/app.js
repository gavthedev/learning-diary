const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

window.addEventListener('DOMContentLoaded', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => renderTask(task));
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === '') return;

    const newTask = { text: taskText };
    renderTask(newTask);
    saveTask(newTask);
    input.value = '';
});

function renderTask(taskObject) {
    const newItem = document.createElement('li');

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskObject.text;

    checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
            list.removeChild(newItem);
            removeTask(taskObject.text);
        }
    });

    
    newItem.appendChild(checkBox);
    newItem.appendChild(taskSpan);
    list.appendChild(newItem);
}

function saveTask(taskObject) {
    const currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    currentTasks.push(taskObject);
    localStorage.setItem('tasks', JSON.stringify(currentTasks));
}

function removeTask(taskText) {
    let currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    currentTasks = currentTasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(currentTasks));
}
