// Background color change DOM Manupulations

// Step 1 onload handler
window.onload = () => {
  main();
};

// Click Handler create
function main() {
  const container = document.getElementById("root");
  const output = document.getElementById("btn-output");
  const copyBtn = document.getElementById("btn-copy");
  const clickBtn = document.getElementById("btn_changer");

  //Bg Changer Click Event
  clickBtn.addEventListener("click", function () {
    const BgHexColor = HexColorGenaretor();
    container.style.backgroundColor = BgHexColor;
    output.value = BgHexColor;
  });

  // Color code copy Event
  copyBtn.addEventListener("click", function () {
    window.navigator.clipboard.writeText(output.value);

    // Area For Toast Massage
    const toastMassage = document.createElement("div");
    toastMassage.className = "toast-massage";
    toastMassage.innerHTML = output.value;
    container.appendChild(toastMassage);
  });
}

// Hex color genarator
function HexColorGenaretor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
