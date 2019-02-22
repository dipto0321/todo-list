import todosController from "../todosController";

import {
  showTodoForm
} from './generalHelpers';

export const showTodoBody = (name) => {
  // Create the parent div 
  let project = JSON.parse(localStorage.getItem(name));
  let todoBody = document.getElementById("todoBody");
  todoBody.innerHTML = "";
  // Create the table if there is already a todo in the project
  if (project.todos.length === 0) {
    createEmptyTodoMsg(name);
  } else {
    // Remove class d-none for table
    document.getElementsByTagName("table")[0].setAttribute("class", "table table-striped");
    // Iterate thru each todo and create tr for them
    project.todos.forEach(todo => {
      createTodoRow(todoBody, todo);
    });
  }
};

const createEmptyTodoMsg = name => {
  let emptyTodoMessage = document.createElement("p");
  emptyTodoMessage.setAttribute("class", "emptyTodoMessage")
  emptyTodoMessage.innerText = `No todo items for ${name} yet`;
  document.getElementsByTagName("table")[0].setAttribute("class", "table table-striped");
  document.getElementById("todoBody").appendChild(emptyTodoMessage);
};

const createTodoRow = (todoBody, todo) => {
  let tr = document.createElement("tr");
  let todoDeleteBtn = createTodoDeleteBtn();
  let btnTd = document.createElement("td");
  let todoUpdateBtn = createTodoUpdateBtn();
  btnTd.appendChild(todoUpdateBtn);
  btnTd.appendChild(todoDeleteBtn);
  // tr.setAttribute("id", todo.id);
  createTodoTd(tr, todo.title);
  createTodoTd(tr, todo.description);
  createTodoTd(tr, todo.dueDate);
  createTodoTd(tr, todo.priority);
  createTodoTd(tr, todo.notes);
  tr.appendChild(btnTd);

  todoBody.appendChild(tr);
};

const createTodoTd = (tr, todoProp) => {
  let td = document.createElement("td");
  td.innerText = todoProp;
  tr.appendChild(td);
}

const createTodoUpdateBtn = () => {
  let todoUpdateBtn = document.createElement("button");
  todoUpdateBtn.setAttribute("class", "btn btn-sm btn-warning mx-1 updateTodo");
  todoUpdateBtn.innerText = "Update";
  addUpdateListenerToBtn(todoUpdateBtn);
  return todoUpdateBtn;
}

const createTodoDeleteBtn = () => {
  let todoDeleteBtn = document.createElement("button");
  todoDeleteBtn.setAttribute("class", "btn btn-sm btn-danger mx-1 deleteTodo");
  todoDeleteBtn.innerText = "Delete";
  addDeleteListenerToBtn(todoDeleteBtn);
  return todoDeleteBtn;
}

const addUpdateListenerToBtn = btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    let tr = e.target.parentNode.parentNode;
    tr.parentNode.removeChild(tr);
    let dataID = Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id"));
    let project = JSON.parse(localStorage["projectsArray"]).find(x => x.id === dataID);
    let action = "updateTodo"
    showTodoForm(project, action);
  });
};

const addDeleteListenerToBtn = btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    let dataID = Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id"));
    let project = JSON.parse(localStorage["projectsArray"]).find(x => x.id === dataID);
    let todoId = e.target.parentNode.parentNode.getAttribute("id");
    todosController.delete(project.name, todoId);
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
  });
}