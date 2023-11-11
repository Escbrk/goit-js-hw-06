const inputEL = document.querySelector('#name-input');
const plcHldr = document.querySelector("#name-output");

inputEL.addEventListener('input', (event) => {
    plcHldr.textContent = event.currentTarget.value;
})