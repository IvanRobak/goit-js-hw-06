const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = event.target.email.value.trim();
  const password = event.target.password.value.trim();

  if (!email || !password) {
    return alert('Please, fill in all fields');
  }

  const data = {
    email,
    password,
  };

  console.log(data);
  event.target.reset();
});
