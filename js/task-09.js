function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeBtn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
  body: document.querySelector("body"),
};

refs.changeBtn.addEventListener("click", changeBcg);

function changeBcg(event) {
  const randomColor = getRandomHexColor()
  refs.body.style.backgroundColor = randomColor;
  refs.span.textContent = randomColor
}
