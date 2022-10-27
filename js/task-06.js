const textInput = document.querySelector("#validation-input");

function onBlur(evt) {
  if (evt.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
}

textInput.addEventListener("blur", onBlur);
