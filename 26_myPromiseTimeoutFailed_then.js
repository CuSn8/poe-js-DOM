const failButton = document.getElementsById("fail");
const succesButton = document.getElementById("success");


failButton.addEventListener("click", () => {
  sleepThrow(3000, false)
    .then(() => console.log("succes"))
    .catch(() => console.log("failure"));
});
