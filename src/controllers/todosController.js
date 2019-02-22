import Todo from "../models/todo"

const todoController = (
  () => {
    return {
      create(title, description, dueDate, priority, notes = "", project) {
        let todo = new Todo(title, description, dueDate, priority, notes, project);
        // Extract parent project from localStorage
        let parentProject = JSON.parse(localStorage.getItem(project));
        // Push todo into parentProj's todo
        parentProject.todos.push(todo);
        localStorage.setItem(project, JSON.stringify(parentProject));
        return todo;
      },
      update(project, id) {
        let todo = project.find(x => x.id == id);
        let index = project.findIndex(x => x.id == id);
        let inputs = document.getElementsByClassName("todo-form");
        let title = inputs[0].value;
        let description = inputs[1].value;
        let dueDate = new Date(inputs[2].value).toDateString();
        let priority = document.getElementsByTagName("select")[0].value;
        let notes = inputs[3].value;
        todo = {
          title,
          description,
          dueDate,
          priority,
          notes,
          project.name,
          id
        };
        project.todos.splice(index, 1, todo);
        localStorage.setItem(project.name, JSON.stringify(project));
      },
      delete(project, id) {
        // Extract parent project
        let parentProject = JSON.parse(localStorage.getItem(project));
        // Find todo from name
        let todoIndex = parentProject.todos.findIndex(x => x.id == id);
        // Splice project
        parentProject.todos.splice(todoIndex, 1);
        localStorage.setItem(project, JSON.stringify(parentProject));
      }
    }
  }
)();

export default todoController;