let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

const onClickDecrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const onClickIncrement = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

buttonDecrement.addEventListener('click', onClickDecrement);
buttonIncrement.addEventListener('click', onClickIncrement);
