/*
two text boxes and a button
when you click on the button, it should alert a random value between the values you typed in the text boxes
*/

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const randomiseButton = document.getElementById('randomise-button');

function alertRandomNumber() {
  const randomScale = Math.random();
  const num1Value = Number(num1.value);
  const num2Value = Number(num2.value);

  alert(String((Math.round(num1Value + (num2Value - num1Value) * randomScale))));
}

randomiseButton.addEventListener('click', alertRandomNumber);