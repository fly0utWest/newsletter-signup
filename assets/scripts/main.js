const main = document.querySelector(".main");
const successCard = document.querySelector(".success-card");
const form = document.getElementById("form");
const submitButton = document.getElementById("submit-button");
const dismissButton = document.getElementById("dismiss-button");
const wrongEmail = document.getElementById("error-message");
const input = document.getElementById("email-input");
const enteredEmail = document.getElementById("entered-email");

// Checks if input string has symbols in it and changes its state.
input.addEventListener("input", (event) => {
  if (input.value === "" && input.value.length <= 5) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});

//Sets

const setAnimations = () => {
  main.onanimationend = () => {
    if (main.classList.contains("main_hidden")) {
      main.style.display = "none";
      successCard.style.display = "flex";
      successCard.classList.add("success-card_show");
    }
  };
};

setAnimations();

const submitEmail = () => {
  enteredEmail.textContent = input.value;
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    input.value.includes("@") &&
    input.value.includes(".") &&
    input.value.length >= 5
  ) {
    submitEmail();
    wrongEmail.classList.remove("email-form-tips__error_show");
    wrongEmail.classList.add("email-form-tips__error_hidden");
    wrongEmail.style.display = "none";
    main.classList.add("main_hidden");
  } else {
    wrongEmail.style.display = "inline";
    wrongEmail.classList.add("email-form-tips__error_show");
    input.classList.add("email-form__input_wrong");
  }
});

dismissButton.addEventListener("click", (event) => {
  location.reload();
});
