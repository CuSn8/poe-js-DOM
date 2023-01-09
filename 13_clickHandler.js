const content = document.getElementsByClassName("content")[0];
const result = document.createElement("p");
result.setAttribute("id", "result");
result.innerHTML = "clicked";
const clickMe = document.getElementById("clickme");

clickMe.addEventListener("click", () => {
    content.append(result);
})
