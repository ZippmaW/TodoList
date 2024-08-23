import { appArray } from "..";

class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.tasks = [];
  }
}

const addNewProject = (project) => appArray.push(project);
const removeProject = (project) =>
  appArray.splice(
    appArray.findIndex((a) => a.title === project.title),
    1
  );

export { Project, addNewProject, removeProject };
