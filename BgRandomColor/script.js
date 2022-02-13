// Background color change DOM Manupulations

// Step 1 onload handler
window.onload = () => {
  main();
};

function main() {
  const container = document.getElementById("root");
  const btn = document.getElementById("btn_changer");

  btn.addEventListener("click", function () {
    const bgColor = randomRGBColor();
    container.style.backgroundColor = bgColor;
  });
}

// random  RGB color create
// low color rgb(0,0,0) maximum colo rgb(255, 255, 255)

function randomRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const black = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${black})`;
}
