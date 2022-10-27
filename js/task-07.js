const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
console.log(inputRef);

inputRef.addEventListener('input', onChange);

function onChange(evt) {
    textRef.style.fontSize = `${evt.currentTarget.value}px`;
}