const sleep = (ms, success) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject("failed");
      }
    }, ms)
  );
};

document.querySelector("button#success").addEventListener("click", async () => {
  await sleep(2000, true);
  let p = document.createElement("p");
  p.textContent = "Hello";
  p.classList.add("success");
  document.body.appendChild(p);
});

document.querySelector("button#fail").addEventListener("click", async () => {
  try {
    await sleep(2000, false);
  } catch (e) {
    let p = document.createElement("p");
    p.textContent = e;
    p.classList.add("fail");
    document.body.appendChild(p);
  }
});
