/*
!TASK
  add a text box and a button in the HTML
  when you click on the button it should save the data of
  text box in the local storage
  list data from local storage
*/

const textBox = document.getElementById('text-box');
const submitButton = document.getElementById('submit-button');
const showDataButton = document.getElementById('show-data-button');

submitButton.addEventListener('click', saveToLocalStorage);
showDataButton.addEventListener('click', showLocalStorage);

function saveToLocalStorage() {
  localStorage.setItem('text', textBox.value);
}

function showLocalStorage() {
  console.log(localStorage.getItem('text'));
}