const addButton = document.getElementsByTagName("button")[0];

const sleepThrow = (milliseconds, bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      setTimeout(resolve, milliseconds);
    } else {
      setTimeout(reject, milliseconds);
    }
  });
};

addButton.addEventListener("click", () => {
  sleepThrow(3000, false)
    .then(() => console.log("succes"))
    .catch(() => console.log("failure"));
});
