const form = document.querySelector('form.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const userEmail = event.target.elements.email.value.trim();
  const userPassword = event.target.elements.password.value.trim();
  if (userEmail && userPassword) {
    const userData = {
      email: userEmail,
      password: userPassword,
    };
    console.log(userData);
    form.reset();
  } else {
    alert('All form fields must be filled in');
  }
}
