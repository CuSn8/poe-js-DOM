const button = document.createElement("button");
button.innerHTML = "Toggle";
const body = document.getElementsByTagName("body")[0];
button.setAttribute("id", "toggle");
const modal = document.getElementById("modal");
body.append(button);
button.addEventListener("click", () => {
    modal.classList.toggle("is-open");
})