const inputRangeRed = document.querySelector('.inputRangeRed');
const inputRed = document.querySelector('.viewValColorRed');
const inputRangeGreen = document.querySelector('.inputRangeGreen');
const inputGreen = document.querySelector('.viewValColorGreen');
const inputRangeBlue = document.querySelector('.inputRangeBlue');
const inputBlue = document.querySelector('.viewValColorBlue');
const divView = document.querySelector('#revealColor');
const divTudo = document.querySelector('#tudo');
const body = document.querySelector('body');
var colorRed, colorGreen, colorBlue;

inputRed.value = inputRangeRed.value;
inputGreen.value = inputRangeGreen.value;
inputBlue.value = inputRangeBlue.value;

function tradeColorBackGround(r, g, b) {
  divView.style.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ')';
  body.style.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ')';
}

inputRangeRed.addEventListener('change', (event) => {
  colorRed = inputRangeRed.value;
  inputRed.value = colorRed;
  tradeColorBackGround(colorRed, colorGreen, colorBlue);
});

inputRangeGreen.addEventListener('change', (event) => {
  colorGreen = inputRangeGreen.value;
  inputGreen.value = colorGreen;
  tradeColorBackGround(colorRed, colorGreen, colorBlue);
});

inputRangeBlue.addEventListener('change', (event) => {
  colorBlue = inputRangeBlue.value;
  inputBlue.value = colorBlue;
  tradeColorBackGround(colorRed, colorGreen, colorBlue);
});

window.onload = function () {
  inputRangeRed.focus();
  tradeColorBackGround(128, 128, 128);
};
