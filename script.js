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

  //Type Hex Color Keyup Handaler
  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    container.style.backgroundColor = color;
  });

  // Color code copy Event
  copyBtn.addEventListener("click", function () {
    window.navigator.clipboard.writeText(output.value);

    // Toast Massage Function Call
    if (divElement !== null) {
      divElement.remove();
      divElement == null;
    }
    if (isColoHex(color)) {
      toastMassage(`${color} copied!`);
    } else {
      alert("invalied color code");
    }
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

// Function For Type HexColor code and Change Background
/**
 *
 * @param {String} color
 */
function isColoHex(color) {
  if (color.length !== 7) return false;
  if (color.length[0] !== "#") return false;

  color = color.substring(1);
  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color);
}
