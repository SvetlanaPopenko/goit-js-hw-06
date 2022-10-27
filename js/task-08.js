const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  const form = {};
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  form[email.name] = email.value;
  form[password.name] = password.value;
  console.log(form);

  evt.currentTarget.reset();
}
