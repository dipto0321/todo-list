export const showTodoBody = (name) => {
  // Create the parent div 
  let project = JSON.parse(localStorage.getItem(name));
  let id = project.id;
  let todoBody = document.createElement("tbody");
  todoBody.setAttribute("class", "projectTodo");
  todoBody.setAttribute("id", `project-${id}`)
  // Create the table if there is already a todo in the project
  if (project.todos.length === 0) {
    let emptyTodoMessage = document.createElement("p");
    emptyTodoMessage.setAttribute("class", "emptyTodoMessage")
    emptyTodoMessage.innerText = `No todo items for ${name} yet`;
    todoBody.appendChild(emptyTodoMessage);
  } else {
    // Iterate thru each todo and create tr for them
    project.todos.forEach(todo => {
      // Create tr
      let tr = document.createElement("tr");
      let trContent = `
        <td>${todo.title}</td>
        <td>${todo.description}</td>
        <td>${todo.dueDate}</td>
        <td>${todo.priority}</td>
        <td>${todo.note}</td>
        <td><button class="btn-sm btn btn-primary">Delete</button></td>
      `;
      tr.innerHTML = trContent;
      todoBody.appendChild(tr);
    });
  }
  document.getElementsByTagName("table")[0].innerHTML = todoBody;
}