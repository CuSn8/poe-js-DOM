const addButton = document.getElementsByTagName("button")[0];
const body = document.getElementsByTagName("body")[0];

addButton.addEventListener("click", () => {
  setTimeout(() => {
    const addMe = document.createElement("p");
    addMe.innerHTML = "Added !";
    body.appendChild(addMe);
  }, 2000);
});
