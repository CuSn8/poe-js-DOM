const addButton = document.getElementById("addTodo");
addButton.setAttribute("type", "submit");
const taskList = document.getElementById("task-list");
const taskNameInput = document.getElementById("task-name");
const taskNameForm = document.getElementById("task-form");
taskList.style.width = "100%";

taskNameForm.onsubmit = (e) => {
  e.preventDefault();
  let taskCard = document.createElement("div");
  taskCard.style.width = "80%";
  taskCard.style.backgroundColor = "lightgrey";
  taskCard.style.border = "solid 2px black";
  taskCard.style.borderRadius = "8px";
  taskCard.style.padding = "8px";
  const taskName = document.createElement("h3");
  taskName.innerHTML = taskNameInput.value;
  taskCard.append(taskName);
  taskList.append(taskCard);
  console.dir(taskCard);
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    taskCard.remove();
  });
  taskCard.appendChild(deleteButton);
};
