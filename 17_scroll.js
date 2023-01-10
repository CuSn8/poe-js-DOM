const body = document.getElementsByTagName("body")[0];

window.addEventListener("scroll", () => {
  const dateElement = document.createElement("p");
  const date = new Date();
  dateElement.innerHTML = `${date}`;
  body.append(dateElement);
});
