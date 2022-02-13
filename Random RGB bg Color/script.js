// Lucky Number Viewer

//Onchange Handler genarate
window.onload = () => {
  // main();
  // console.log("ok");
};
// main();

function main() {
  const number = document.getElementById("number");
  const btn = document.getElementById("btn-number");

  btn.addEventListener("click", function () {
    const pickedNumber = randomNumber();
    number.innerHTML = `${pickedNumber}`;
  });
}

// Random Number Genarate

function randomNumber() {
  const number = Math.floor(Math.random() * 1000);
  return number;
}
