const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onSubmit);

console.log();

function onSubmit(event) {
  event.preventDefault();

  refs.form.email.required = true;
  refs.form.password.required = true;

  refs.form.addEventListener("click", () => {
    if (refs.form.email.value === "" || refs.form.password.value === "") {
      alert("Все поля должны быть заполнены!");
    } else {
      const ObjectData = {
        email: refs.form.email.value,
        password: refs.form.password.value,
      };

      console.log(ObjectData);
      refs.form.reset();
    }
  });
}
