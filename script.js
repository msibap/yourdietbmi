"use strict";

const height = document.querySelector(".form__height--input");
const weight = document.querySelector(".form__weight--input");
const result = document.querySelector(".result");
const btnCalculate = document.querySelector(".calculate");
const btnRefresh = document.querySelector(".refresh");
const btnDarkMode = document.querySelector(".btn--dark-toggle");
const formBackground = document.querySelector(".form");
const header = document.querySelector(".form__items--header");

// Calculates BMI formula: x = weight, y = height
const bmiCalculate = function (x, y) {
  result.textContent = (x / Math.pow(y / 100, 2)).toFixed(2);
  console.log(result.textContent);

  // Controlling the input numbers
  if (
    height.value == "" ||
    weight.value == "" ||
    height.value <= 0 ||
    weight.value <= 0
  ) {
    result.textContent = "قد و وزن خود را وارد کنید";
  }
};

// Refreshes the values
const refresh = function () {
  height.value = "";
  weight.value = "";
  result.textContent = "";
};

// Calculate Button
btnCalculate.addEventListener("click", function () {
  bmiCalculate(weight.value, height.value);
});

// Refresh Button
btnRefresh.addEventListener("click", refresh);

// Keyboard buttons
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    bmiCalculate(weight.value, height.value);
  } else if (e.key == "Escape") {
    refresh();
  }
});

btnDarkMode.addEventListener("click", function () {
  formBackground.classList.toggle("dark-mode--bgn");
  header.classList.toggle("dark-mode--form");
  weight.classList.toggle("dark-mode--field");
  height.classList.toggle("dark-mode--field");
  result.classList.toggle("dark-mode--form");
  btnCalculate.classList.toggle("dark-mode--btn");
  btnRefresh.classList.toggle("dark-mode--btn");
  btnDarkMode.classList.toggle("dark-mode--btn");
  if (btnDarkMode.textContent == "DARK") {
    btnDarkMode.textContent = "LIGHT";
  } else {
    btnDarkMode.textContent = "DARK";
  }
});
