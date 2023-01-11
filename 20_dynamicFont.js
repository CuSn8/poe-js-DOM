const fontInput = document.getElementById("fontsize");
const controlledFont = [
  ...document.getElementsByClassName("controlled_fontsize"),
];

fontInput.addEventListener("input", (e) => {
  console.log(fontInput.value);
  controlledFont.forEach((element) => {
    element.style.fontSize = `${fontInput.value}px`;
  });
});
