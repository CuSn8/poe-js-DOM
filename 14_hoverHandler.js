const hoverMe = document.getElementById("hoverme");
const result = document.createElement("p");
const content = document.getElementsByClassName("content")[0];
result.setAttribute("id", "result");
result.innerHTML = "hovered";
console.log("hoverMe", hoverMe);


hoverMe.addEventListener("mouseover", () => {
  content.append(result);
});
