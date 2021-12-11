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
};

// Calculate Button
btnCalculate.addEventListener("click", function () {
  bmiCalculate(weight.value, height.value);
});

// Refresh Button
btnRefresh.addEventListener("click", function () {
  height.value = "";
  weight.value = "";
  result.textContent = "Result Here!";
});
