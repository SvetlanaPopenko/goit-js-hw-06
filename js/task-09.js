function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonClick = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const body = document.querySelector('body');
console.log(buttonClick);

buttonClick.addEventListener('click', onchangeColor);

function onchangeColor(evt) {
  const randomHexColor = getRandomHexColor();

  colorValue.textContent = `${randomHexColor}`;
  body.style.backgroundColor = `${randomHexColor}`;
  
}