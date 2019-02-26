import todosController from "../todosController";

import {
  showTodoForm
} from './generalHelpers';

export const showTodoBody = (name) => {
  // Create the parent div 
  let project = extractProject(name);
  let todoBody = document.getElementById("todoBody");
  todoBody.innerHTML = "";
  // Create the table if there is already a todo in the project
  if (project === null || project.todos.length === 0) {
    createEmptyTodoMsg(name);
  } else {
    // Remove class d-none for table
    document.getElementsByTagName("table")[0].setAttribute("class", "table table-striped");
    // Iterate thru each todo and create tr for them
    project.todos.forEach(todo => {
      createTodoRow(todoBody, todo, project);
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

const createTodoRow = (todoBody, todo, project) => {
  let tr = document.createElement("tr"),
    todoDeleteBtn = createTodoDeleteBtn(),
    btnTd = document.createElement("td"),
    todoUpdateBtn = createTodoUpdateBtn(todo.id);

  tr.setAttribute("id", todo.id);
  if (todo.done) tr.setAttribute("class", "strikeout");
  btnTd.appendChild(todoUpdateBtn);
  btnTd.appendChild(todoDeleteBtn);
  ["title", "description", "dueDate", "priority", "notes", "done"].forEach(prop => {
    if (prop === "done") {
      createTodoTd(tr, todo[prop], todo, project);
    } else {
      createTodoTd(tr, todo[prop]);
    }
  });

  tr.appendChild(btnTd);

  todoBody.appendChild(tr);
};

const createTodoTd = (tr, todoProp, todo, project) => {
  let td = document.createElement("td");
  if (typeof todoProp === "boolean") {
    let inputDone = document.createElement("input");
    inputDone.setAttribute("type", "checkbox");
    if (todo.done) inputDone.setAttribute("checked", true);
    inputDone.setAttribute("value", todoProp);
    inputDone.addEventListener("change", e => {
      e.stopPropagation();
      doneCheckBoxCallBack(e.target, todo, project);
    });

    td.appendChild(inputDone);

  } else {
    td.innerText = todoProp;
  }
  tr.appendChild(td);
};

const doneCheckBoxCallBack = (target, todo, project) => {
  todo.done = !todo.done;
  todoDoneToggle(target, todo.done);
  [...(target.parentNode.parentNode.childNodes[6].childNodes)].forEach(node => node.toggleAttribute("disabled"));
  let todoStatus = todo.done;
  target.setAttribute("value", todoStatus);
  let index = project.todos.findIndex(x => x.id === todo.id);
  project.todos.splice(index, 1, todo);
  localStorage.setItem(project.name, JSON.stringify(project));
};

const todoDoneToggle = (target, todoDone) => {
  if (todoDone) {
    target.parentNode.parentNode.setAttribute("class", "strikeout");
  } else {
    target.parentNode.parentNode.removeAttribute("class");
  }
};

const createTodoUpdateBtn = (id) => {
  let todoUpdateBtn = document.createElement("button");
  todoUpdateBtn.setAttribute("class", "btn btn-sm btn-warning mx-1 updateTodo");
  todoUpdateBtn.setAttribute("id", id);
  todoUpdateBtn.innerText = "Update";
  todoUpdateBtn.addEventListener("click", e => {
    e.stopPropagation();
    updateBtnCallback(e.target);
  });
  return todoUpdateBtn;
};

const createTodoDeleteBtn = () => {
  let todoDeleteBtn = document.createElement("button");
  todoDeleteBtn.setAttribute("class", "btn btn-sm btn-danger mx-1 deleteTodo");
  todoDeleteBtn.innerText = "Delete";
  addDeleteListenerToBtn(todoDeleteBtn);
  return todoDeleteBtn;
};

const updateBtnCallback = (target) => {
  let tr = target.parentNode.parentNode,
    dataID = Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id")),
    projectName = extractProjectName(dataID),
    todoId = target.getAttribute("id"),
    project = extractProject(projectName),
    action = "updateTodo";

  tr.parentNode.removeChild(tr);
  showTodoForm(project, action, todoId);
  // Pre-fill up form with current values
  prefillTodoForm(project, todoId);
};

const prefillTodoForm = (project, todoId) => {
  let todo = project.todos.find(x => x.id == todoId),
    inputs = document.getElementsByClassName("todo-form"),
    currentDueDate = new Date(todo.dueDate);

  inputs[0].value = todo.title;
  inputs[1].value = todo.description;
  inputs[2].value = `${currentDueDate.getFullYear()}-0${currentDueDate.getMonth() + 1}-${currentDueDate.getDate()}`;
  document.getElementsByTagName("select")[0].value = todo.priority;
  inputs[3].value = todo.notes;
}

const addDeleteListenerToBtn = btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    let dataID = Number(document.getElementsByClassName("addTodoBtn")[0].getAttribute("data-id"));
    let projectName = extractProjectName(dataID);
    let todoId = e.target.parentNode.parentNode.getAttribute("id");
    todosController.delete(projectName, todoId);
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
  });
};

const extractProjectName = dataID => {
  return JSON.parse(localStorage["projectsArray"]).find(x => x.id === dataID).name;
};

const extractProject = name => {
  return JSON.parse(localStorage[name]);
};