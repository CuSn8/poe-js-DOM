const button = document.querySelectorAll("button");
console.log(button);
buttonArray = [...button];
buttonArray.map((button) => (button.style.backgroundColor = "red"));
