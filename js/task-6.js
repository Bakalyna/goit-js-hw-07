const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputElem = document.getElementById('controls').querySelector('input');
const boxWithBoxes = document.querySelector('div#boxes');

function createBoxes(amount) {
  const arrayCreate = [];
  for (let i = 0; i < amount; i++) {
    arrayCreate.push('<div class="box"></div>');
  }
  boxWithBoxes.innerHTML = arrayCreate.join('');
  const arrayStyles = document.querySelectorAll('div.box');
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    arrayStyles[i].style.width = `${boxSize}px`;
    arrayStyles[i].style.height = `${boxSize}px`;
    arrayStyles[i].style.backgroundColor = getRandomHexColor();
    boxSize += 10;
  }
}
function destroyBoxes() {
  boxWithBoxes.innerHTML = '';
}

btnCreate.addEventListener('click', event => {
  const count = inputElem.value;
  if (count >= 1 && count <= 100 && count % 1 === 0) {
    createBoxes(count);
    inputElem.value = '';
  }
});
btnDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
