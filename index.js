const signUpForm = document.forms["sign-up-form"];
const firstNameInput = signUpForm["first-name"];
const lastNameInput = signUpForm["last-name"];
const ageInput = signUpForm["age"];
const fnMessage = document.querySelector("#fn-message");
const lnMessage = document.querySelector("#ln-message");
const ageMessage = document.querySelector("#age-message");

const fetchSection = document.querySelector(".fetch-section");
const fullName = document.querySelector("#fullname-value");
const ageValue = document.querySelector("#age-value");
const fnHeader = document.querySelector("#fn-header");
const back = document.querySelector("#back-button");

function validating() {
  if (firstNameInput.value.trim() === "") {
    fnMessage.classList.remove("text-success");
    fnMessage.classList.add("text-danger");
    fnMessage.innerHTML = "Nama depan tidak boleh kosong!";
  } else {
    fnMessage.classList.remove("text-danger");
    fnMessage.classList.add("text-success");
    fnMessage.innerHTML = "Sukses";
  }
  if (lastNameInput.value.trim() === "") {
    lnMessage.classList.remove("text-success");
    lnMessage.classList.add("text-danger");
    lnMessage.innerHTML = "Nama belakang tidak boleh kosong!";
  } else {
    lnMessage.classList.remove("text-danger");
    lnMessage.classList.add("text-success");
    lnMessage.innerHTML = "Sukses";
  }
  if (ageInput.value < 17) {
    ageMessage.classList.remove("text-success");
    ageMessage.classList.add("text-danger");
    ageMessage.innerHTML = "Umur harus 17 ke atas!";
  } else {
    ageMessage.classList.remove("text-danger");
    ageMessage.classList.add("text-success");
    ageMessage.innerHTML = "Sukses";
  }
}

function fetchIdentity() {
  if (
    fnMessage.innerHTML === "Sukses" &&
    lnMessage.innerHTML === "Sukses" &&
    ageMessage.innerHTML === "Sukses"
  ) {
    signUpForm.classList.add("mb-3");
    fetchSection.classList.remove("d-none");
    fnHeader.innerHTML = `<h1>Hi, ${firstNameInput.value}!</h1><h5> Data anda sudah diterima</h5>`;
    fullName.innerHTML = firstNameInput.value + " " + lastNameInput.value;
    ageValue.innerHTML = ageInput.value;
  } else {
    fetchSection.classList.add("d-none");
    fullName.innerHTML = "undefined";
    ageValue.innerHTML = "undefined";
  }
}

signUpForm.onsubmit = (event) => {
  event.preventDefault();
  validating();
  fetchIdentity();
};

function backButton() {
  window.location.reload();
  fetchSection.classList.add("d-none");
  signUpForm.classList.remove("mb-3");
}

back.addEventListener("click", backButton);
