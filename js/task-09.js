const colorSpan = document.querySelector('.color');
const button = document.querySelector('.change-color');
const body = document.querySelector('body');

button.addEventListener('click', e => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.innerText = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
