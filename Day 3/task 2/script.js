/*
create a function which will take three parameters, a string, an index and a number
It will extract the text from index
*/


function betterSubstring(string, index, lastIndex) {
  let subString = "";
  for (let i = index; i <= lastIndex; ++i) {
    subString += string[i];
  }
  return subString;
}

const textInput = document.getElementById('text-input');
const submitButton = document.getElementById('submit-button');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

submitButton.addEventListener('click', changeParagraph);

function changeParagraph() {
  const p1 = document.getElementById('p1');
  p1.innerText = `Found substring: ${betterSubstring(textInput.value, num1.value, num2.value)}`
}