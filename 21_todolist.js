const addButton = document.getElementById("addTodo");
addButton.setAttribute("type", "submit");
const taskList = document.getElementById("task-list");
const taskNameInput = document.getElementById("task-name");
const taskNameForm = document.getElementById("task-form");
taskList.style.width = "100%";

taskNameForm.onsubmit = (e) => {
  e.preventDefault();
  let taskCard = document.createElement("div");
  taskCard.style = Object.assign(taskCard.style, {
    backgroundColor: "lightgrey",
    border: "solid 2px black",
    width: "100%",
  });
  const taskName = document.createElement("h3");
  taskName.innerHTML = taskNameInput.value;
  taskCard.append(taskName);
  taskList.append(taskCard);
};
