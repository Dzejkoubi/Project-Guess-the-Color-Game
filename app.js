let colors = [];

for (let i = 0; i < 4; i++) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let color = `rgb(${red}, ${green}, ${blue})`;
  colors.push(color);
}

console.log(colors);

document.documentElement.style.setProperty("--color-1", colors[0]);
document.documentElement.style.setProperty("--color-2", colors[1]);
document.documentElement.style.setProperty("--color-3", colors[2]);
document.documentElement.style.setProperty("--color-4", colors[3]);

//randomly select a color from the array
let randomColor = colors[Math.floor(Math.random() * colors.length)].slice(
  4,
  -1
);
console.log(randomColor);
//change text in h3 to the random color
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("h3").textContent = `What color is "${randomColor}"?`;
});
