const rangeInput = document.querySelectorAll(".ct-range");
const priceInput = document.querySelectorAll(".ct-slider-input");
const range = document.querySelector(".ct-slider-progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minValue = +priceInput[0].value;
    let maxValue = +priceInput[1].value;

    if (maxValue - minValue >= priceGap && maxValue <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minValue;
        range.style.left = (minValue / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxValue;
        range.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minValue = parseInt(rangeInput[0].value),
      maxValue = parseInt(rangeInput[1].value);

    if (maxValue - minValue < priceGap) {
      if (e.target.className === "ct-range-min") {
        rangeInput[0].value = maxValue - priceGap;
      } else {
        rangeInput[1].value = minValue + priceGap;
      }
    } else {
      priceInput[0].value = minValue;
      priceInput[1].value = maxValue;
      range.style.left = (minValue / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
    }
  });
});
