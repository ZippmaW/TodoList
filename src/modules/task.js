class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  getTitle() {
    return this.title;
  }
}

const addNewTask = (project, task) => project.tasks.push(task);
const removeTask = (project) => {
  const test = project.tasks[1].title;
  project.tasks.splice(
    project.tasks.findIndex((a) => a.title === test),
    1
  );
};

export { Task, addNewTask, removeTask };
