const textInput = document.querySelector("#validation-input");

function onBlur(evt) {
  if (evt.currentTarget.value.length == textInput.dataset.length) {
    return textInput.classList.add("valid");
  }
  return textInput.classList.add("invalid");
}

textInput.addEventListener("blur", onBlur);
