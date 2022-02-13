// Background color change DOM Manupulations

// Step 1 onload handler
window.onload = () => {
  main();
};

// Click Handler create
function main() {
  const container = document.getElementById("root");
  const output = document.getElementById("output");
  const btn = document.getElementById("btn_changer");

  btn.addEventListener("click", function () {
    const BgHexColor = HexColorGenaretor();
    container.style.backgroundColor = BgHexColor;
    output.value = BgHexColor;
  });
}

// Hex color genarator
function HexColorGenaretor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
