const body = document.getElementsByTagName("body")[0];

const addButton = document.getElementsByTagName("button")[0];

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

addButton.addEventListener("click", async () => {
  await sleep(2000);
  const addMe = document.createElement("p");
  addMe.innerText = "Added !";
  body.append(addMe);
});
