import projectsController from './controllers/projectsController';
import todosController from "./controllers/todosController";
import {
  showProjectList,
  appendNewProject
} from "./controllers/helpers/showProjectList";
import {
  showTodoBody
} from './controllers/helpers/showTodoBody';


if (localStorage.getItem("projectsArray") === null) {
  let projectsArray = [];
  localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

if (localStorage.getItem("Default Project") === null) {
  let defaultProject = projectsController.create("Default Project");
}


showProjectList();


// Candidates for transfer into their own modules
document.getElementById("projectNameForm").addEventListener('submit', e => {
  e.preventDefault();
  let name = document.getElementById("projectName").value;
  let project = projectsController.create(name);
  appendNewProject(project);
  e.target.setAttribute("class", "d-none");
  document.getElementById("addProjBtn").setAttribute("class", "btn btn-sm btn-primary mt-2");
});

document.getElementById("addProjBtn").addEventListener("click", e => {
  document.getElementById("projectNameForm").removeAttribute("class");
  e.target.setAttribute("class", "d-none");
})