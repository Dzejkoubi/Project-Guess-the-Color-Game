let colors = [];
let colorText = document.getElementById("color-display");
let colorButton0 = document.getElementById("colorbutton0");
let colorButton1 = document.getElementById("colorbutton1");
let colorButton2 = document.getElementById("colorbutton2");
let colorButton3 = document.getElementById("colorbutton3");

for (let i = 0; i < 4; i++) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  colors.push(`rgb(${red}, ${green}, ${blue})`);
}
let correctAnswerNumber = Math.floor(Math.random() * colors.length);

for (let i = 1; i <= 4; i++) {
  document.documentElement.style.setProperty(`--color-${i}`, colors[i - 1]);
}
let correctAnswer = colors[correctAnswerNumber];
window.addEventListener("load", () => {
  colorText.innerHTML = `What color is<br> "${correctAnswer.slice(4, -1)}"?`;
  console.log("loaded");
});

colorButton0.addEventListener("click", function () {
  if (colors[0] === correctAnswer) {
    alert("Correct!");
    location.reload();
  } else {
    alert("Wrong!");
  }
});
colorButton1.addEventListener("click", function () {
  if (colors[1] === correctAnswer) {
    alert("Correct!");
    location.reload();
  } else {
    alert("Wrong!");
  }
});
colorButton2.addEventListener("click", function () {
  if (colors[2] === correctAnswer) {
    alert("Correct!");
    location.reload();
  } else {
    alert("Wrong!");
  }
});
colorButton3.addEventListener("click", function () {
  if (colors[3] === correctAnswer) {
    alert("Correct!");
    location.reload();
  } else {
    alert("Wrong!");
  }
});
