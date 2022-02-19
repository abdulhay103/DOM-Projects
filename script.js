// Background color change DOM Manupulations

// Step 1 onload handler
window.onload = () => {
  main();
};

//Global Variables
let divElement = null;

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

    // Toast Massage Function Call
    if (divElement !== null) {
      divElement.remove();
      divElement == null;
    }
    toastMassage(`${output.value} copied!`);
  });
}

// Hex color genarator
function HexColorGenaretor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// Toast Massage Genarator
function toastMassage(msg) {
  divElement = document.createElement("div");
  divElement.classList = "toast-massage toast-animation-in";
  divElement.innerText = msg;

  divElement.addEventListener("click", function () {
    divElement.classList.remove("toast-animation-in");
    divElement.classList.add("toast-animation-out");

    divElement.addEventListener("animationend", function () {
      divElement.remove();
      divElement == null;
    });
  });

  document.body.appendChild(divElement);
}
