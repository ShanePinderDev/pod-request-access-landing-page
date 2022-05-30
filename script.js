"use scrict";

const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();

  if (emailValue === "" || emailValue === null) {
    setErrorFor(email, "Oops! Please check your email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Oops! Please check your email");
  } else {
    setSuccessFor(email, "Thanks! We'll be in touch!");
    setTimeout(resetForm, 2000);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";

  small.innerText = message;
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control success";
  small.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function resetForm() {
  form.reset();
  document.querySelector(".form-control").classList.remove("success");
}
