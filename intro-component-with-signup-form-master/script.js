"use strict";
const btnClaim = document.querySelector(".claim");
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const errImages = document.querySelectorAll("img");
const email = document.getElementById("email");
const emailErr = document.getElementById("email-err");
const emailErrImg = document.getElementById("email-err-img");

const allPlaceholders = Array.from(inputs).map((input) => input.placeholder);
console.log(allPlaceholders);

let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function checkEmailAddress(email_address) {
  let result = pattern.test(email_address);
  return result;
  // this will return true if email address format is correct and false if not.
}

btnClaim.addEventListener("click", function (e) {
  e.preventDefault();

  //Removing old errors, clearing placeholders for empty inputs and checking if fields are not empty
  inputs.forEach((input, index) => {
    input.classList.remove("err-border");
    labels[index].classList.add("closed");
    errImages[index].classList.add("closed");
    emailErr.classList.add("closed");
    emailErrImg.classList.add("closed");
    input.placeholder = allPlaceholders[index];

    if (input.value.trim().length === 0) {
      input.classList.add("err-border");
      labels[index].classList.remove("closed");
      errImages[index].classList.remove("closed");
      input.placeholder = "";
    }
  });

  //Checking email address format
  if (!checkEmailAddress(email.value)) {
    emailErr.classList.remove("closed");
    emailErrImg.classList.remove("closed");
    email.classList.add("err-border");
    email.value = "";
    email.placeholder = "email@example.com";

    email.classList.add("red");
  } else {
    email.classList.add("grey");
  }
  //Simulating form submission - clearing input fields
  let allValid = Array.from(inputs).every(
    (input) => !(input.value.trim().length === 0)
  );
  if (allValid && checkEmailAddress(email.value)) {
    inputs.forEach((input) => (input.value = ""));
    email.classList.remove("red");
  }
});
