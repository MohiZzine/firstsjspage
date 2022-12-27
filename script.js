"use strict"; // Enable strict mode

const formInputs = ["First Name", "Last Name", "Email"];
const formSelects = [
  "Study Format",
  "Study Program",
  "English Level",
  "Study Location",
  "Phone Number",
  "Country",
];

const phone = document.querySelector("input[type='tel']");
const checkIcons = document.querySelectorAll(".select img");
const inputs = document.querySelectorAll("input");

const selects = document.querySelectorAll("select");

const submitBtn = document.querySelector("#submit");
function validateForm() {
  // Make sure no text input is empty
  for (let i = 0; i < formInputs.length; i++) {
    if (inputs[i].value === "") {
      alert(`${formInputs[i]} should not be empty!`);
      return false;
    }
  }

  // Make sure no select input is empty
  for (let j = 0; j < formSelects.length; j++) {
    if (selects[i].value === "") {
      alert(`${selects[j].value} should not be empty!`);
      return false;
    } else {
      alert(`${selects[j].value} are not empty!`);
    }
    alert("Everything is fine, the form will be submitted !");
    return true;
  }
}

for (let i = 0; i < selects.length; i++) {
  selects[i].addEventListener(
    "change",
    function () {
      if (selects[i].value !== "") {
        checkIcons[i].style.display = "block";
      } else {
        checkIcons[i].style.display = "none";
      }
    },
    false
  );
}

document.querySelector("form").addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});

// window.intlTelInput(phone, {});