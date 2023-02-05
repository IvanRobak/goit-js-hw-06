const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    return input.classList.add('valid');
  }
  return input.classList.add('invalid');
});
