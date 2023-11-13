const refs = {
  inputEL: document.querySelector("#name-input"),
  plcHldr: document.querySelector("#name-output"),
};

refs.inputEL.addEventListener("input", (event) => {
  if (!event.currentTarget.value.trim() || !event.currentTarget.value) {
    refs.plcHldr.textContent = "Anonymous";
  } else {
    refs.plcHldr.textContent = event.currentTarget.value;
  }
});
