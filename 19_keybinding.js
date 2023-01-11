const square = document.getElementById("square");
console.dir(square);
let topValue = 0;
let leftValue = 0;

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      topValue -= 10;
      square.style.top = `${topValue}px`;
      break;
    case "ArrowRight":
      leftValue += 10;
      square.style.left = `${leftValue}px`;
      break;
    case "ArrowLeft":
      leftValue -= 10;
      square.style.left = `${leftValue}px`;
      break;
    case "ArrowDown":
      topValue += 10;
      square.style.top = `${topValue}px`;
      break;
  }
});
square.style.left = `${leftValue}px`;
