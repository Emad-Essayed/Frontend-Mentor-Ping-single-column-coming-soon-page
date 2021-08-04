"use strict";

let emailBox = document.querySelector(".email-box"),
  inputsDiv = document.querySelector(".form-inputs"),
  inputsForm = document.querySelector(".input-form"),
  createdError;

document.querySelector(".btn-submit").onclick = (e) => {
  e.preventDefault();

  ValidateEmail(emailBox) ? RemoveErrorDiv() : createErrorDiv();
};

function ValidateEmail(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    return true;
  } else {
    input.classList.add("red");
    return false;
  }
}

function createErrorDiv() {
  RemoveErrorDiv();
  let errorDiv = document.createElement("div"),
    containerWidth = document.querySelector(".container").clientWidth;
  errorDiv.textContent = "Please provid a vaild email address";
  errorDiv.className = "error";
  containerWidth > 551
    ? inputsForm.appendChild(errorDiv)
    : inputsDiv.insertBefore(errorDiv, inputsDiv.lastElementChild);
}

function RemoveErrorDiv() {
  createdError = document.querySelector(".error");
  if (createdError != null) {
    createdError.remove();
  }
}
