function classSelector() {
  const xWing = document.getElementsByClassName("x-wing");
  return xWing[2].innerHTML;
}
module.exports = classSelector;
