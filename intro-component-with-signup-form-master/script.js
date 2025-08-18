"use strict";
const btnClaim = document.querySelector(".claim");
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const errImages = document.querySelectorAll("img");
btnClaim.addEventListener("click", function (e) {
  e.preventDefault();

  inputs.forEach((input, index) => {
    input.classList.remove("err-border");
    labels[index].classList.add("closed");
    errImages[index].classList.add("closed");

    if (input.value.trim().length === 0) {
      input.classList.add("err-border");
      labels[index].classList.remove("closed");
      errImages[index].classList.remove("closed");
    }
  });
});
