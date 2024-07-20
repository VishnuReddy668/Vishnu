document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    
    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

function addTodoItem(todoText) {
    const todoList = document.getElementById('todoList');
    const listItem = document.createElement('li');
    listItem.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    todoList.appendChild(listItem);
}
