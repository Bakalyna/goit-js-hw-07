const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

nameInput.addEventListener('input', event => {
  const userName = event.currentTarget.value.trim();
  nameOutput.textContent = userName ? userName : 'Anonymous';
});
