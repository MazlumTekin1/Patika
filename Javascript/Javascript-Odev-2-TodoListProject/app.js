const task = document.querySelector("#task");
const todoInput = document.querySelector("#liveToastBtn");
const todoList = document.querySelector("#list");
const warningAlert = document.querySelectorAll("#liveToast")[0];
const successfulAlert = document.querySelectorAll("#asd")[1];
eventListeners();

function eventListeners() {
    todoInput.addEventListener("submit", newElement);
    todoList.addEventListener("click", deleteTodo);
}

function newElement(e) {
    const newTodo = task.value.trim();
    if (newTodo === "") {
        $(document).ready(function(){
            $('.toast').toast('show');
          });
    } else {
        addTodo(newTodo);
        addTodoToLocalStorage(newTodo);
    }

    e.preventDefault();
}

function addTodo(newTodo) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
}

function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
    }
}

function addTodoToLocalStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodosFromStorage() {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


