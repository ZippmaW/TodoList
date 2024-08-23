import { appArray } from "..";
import { removeProject } from "./project";

function displayProjects() {
  const projectList = document.querySelector(".projects-list");
  projectList.innerHTML = "";

  appArray.map((item) => {
    const container = document.createElement("div");
    const containerInside1 = document.createElement("span");
    const buttonView = document.createElement("button");
    const buttonDelete = document.createElement("button");
    buttonView.classList = "btn-view";
    buttonView.innerHTML = "View";
    buttonDelete.classList = "btn-delete";
    buttonDelete.innerHTML = "Delete";
    container.classList = "project-div";
    containerInside1.innerHTML = item.title;

    container.append(containerInside1, buttonView, buttonDelete);
    projectList.append(container);

    buttonDelete.addEventListener("click", () => {
      removeProject(item);
      displayProjects(appArray);
    });
  });
}

export { displayProjects };
