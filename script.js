// Calculator Setup Formula

// Step 1 onload handler
window.onload = () => {
  main();
};

// Click Handler create
function main() {
  const calBody = document.querySelector(".content");
  const calButton = document.querySelector("button");
  const darkBtn = document.querySelector(".dark");
  const blueBtn = document.querySelector(".blue");
  const lightBtn = document.querySelector(".light");
  // Display Elements
  const functionArea = document.querySelector(".functions");
  const resultsArea = document.querySelector(".results");
  const highlightsArea = document.querySelector(".highlights");

  // Collect all number buttons
  const numbers = document.querySelectorAll(".number-btn button");
  // console.log(numbers);

  //Theme Changer Click Event
  darkBtn.addEventListener("click", function () {
    calBody.className = "content darkTheme";
    calButton.className = "darkBtnStyle";
  });
  blueBtn.addEventListener("click", function () {
    calBody.className = "content blueTheme";
    calButton.className = "blueBtnStyle";
  });
  lightBtn.addEventListener("click", function () {
    calBody.className = "content lightTheme";
    calButton.className = "lightBtnStyle";
  });

  // Display Function
}
