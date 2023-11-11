let counterValue = 0;
// const counterHTML_El = document.querySelector("#counter");
const value = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
