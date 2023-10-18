/*
!TASK
  add a text box and a button in the HTML
  when you click on the button it should save the data of
  text box in the local storage
  list data from local storage

  task 2
  each time when you click the save button:
  save the text box data in the local storage without replacing the previous data
*/

const textBox = document.getElementById('text-box');
const submitButton = document.getElementById('submit-button');
const showDataButton = document.getElementById('show-data-button');

submitButton.addEventListener('click', saveToLocalStorage);
showDataButton.addEventListener('click', showLocalStorage);

function saveToLocalStorage() {
  localStorage.setItem(`${textBox.value}-KEY`, textBox.value);
}

function showLocalStorage() {
  console.log(localStorage);
}