import "./styles.css";
import { Project, addNewProject } from "./modules/project";
import { Task, addNewTask } from "./modules/task";
import { displayProjects } from "./modules/utility.js";

const display = document.querySelector(".content");
const createProjectBtn = document.querySelector(".create-project");

const appArray = [];

const proj1 = new Project("Project 1", "Very supah");
const proj2 = new Project("Project 2", "Extra bombastic1");
const proj3 = new Project("Project 3", "Extra bombastic2");
const task1 = new Task("Task 1", "Mucho supah", "02.04.2026", "Top");
const task2 = new Task("Task 2", "Mucho supah", "02.04.2026", "Top");
const task3 = new Task("Task 3", "Mucho supah", "02.04.2026", "Top");
const task4 = new Task("Task 4", "Mucho supah", "02.04.2026", "Top");
/* const taskTest = appArray[0].tasks[1].getTitle(); */

addNewProject(proj1);
addNewProject(proj2);
addNewProject(proj3);
addNewTask(appArray[0], task1);
addNewTask(appArray[0], task2);
addNewTask(appArray[0], task3);
addNewTask(appArray[0], task4);

console.table(appArray);
console.table(appArray[0].tasks);

displayProjects(appArray);

createProjectBtn.addEventListener("click", () => {
  addNewProject(new Project("Project 4", "Very supah"));
  displayProjects(appArray);
});

export { appArray };
