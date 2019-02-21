import projectsController from '../projectsController';
import {
  showTodoBody
} from './showTodoBody';

// Create projects array

export const createProjectsArray = () => {
  if (localStorage.getItem("projectsArray") === null) {
    let projectsArray = [];
    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
  }
};

export const createDefaultProject = () => {
  if (localStorage["projectCount"] === "0") {
    let defaultProject = projectsController.create("Default Project");
  }

  if (localStorage["Default Project"] !== undefined) showTodoBody(JSON.parse(localStorage["Default Project"]).name);
};