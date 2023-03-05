let colors = [];
for (let i = 0; i < 4; i++) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  colors.push(`rgb(${red}, ${green}, ${blue})`);
}
console.log(colors);
for (let i = 1; i <= 4; i++) {
  document.documentElement.style.setProperty(`--color-${i}`, colors[i - 1]);
}
document.addEventListener("DOMContentLoaded", function () {
  let whatColor = document.getElementById("color-display");
  whatColor.textContent = "This is the new text.";
});
