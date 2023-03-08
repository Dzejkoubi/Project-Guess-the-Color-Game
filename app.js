let colors = [];
let colorText = document.querySelectorAll(".color-text");
let correctAnswerNumber = Math.floor(Math.random() * colors.length);
let correctAnswerIndex = colors[correctAnswerNumber].slice(4, -1);

for (let i = 0; i < 4; i++) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  colors.push(`rgb(${red}, ${green}, ${blue})`);
}
for (let i = 1; i <= 4; i++) {
  document.documentElement.style.setProperty(`--color-${i}`, colors[i - 1]);
}
document.addEventListener("DOMContentLoaded", function () {
  colorText.textContent = `What color is ${correctAnswerIndex}`;
});

//Console Logs
console.log(correctAnswerNumber);
console.log(correctAnswerIndex);
