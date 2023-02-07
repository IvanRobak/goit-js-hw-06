const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  input.classList.remove('invalid', 'valid');

  if (input.value.length === Number(input.dataset.length)) {
    return input.classList.add('valid');
  }
  input.classList.add('invalid');
});
