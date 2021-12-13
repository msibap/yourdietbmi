"use strict";

const height = document.querySelector(".form__height--input");
const weight = document.querySelector(".form__weight--input");
const result = document.querySelector(".result");
const btnCalculate = document.querySelector(".calculate");
const btnRefresh = document.querySelector(".refresh");

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
