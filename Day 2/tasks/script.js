/*
TASK:
Add a div in the html.
When you hover on the div, it should change its background color to red and text to Go away!
Change the height and width of the div as well when you hover.
*/

const div1 = document.getElementById('div1');
div1.addEventListener('mouseenter', div1Enlarge);
div1.addEventListener('mouseleave', div1Normalize);

function div1Enlarge() {
  div1.style.cssText = `
  height: 200px;
  width: 200px;
  background-color: red;
  `
  div1.innerText = 'GO AWAY!';
}

function div1Normalize() {
  div1.style.cssText = `
  height: 100px;
  width: 100px;
  background-color: greenyellow;
  `
  div1.innerText = '';
}

/*
Have a p, two text box for first name and last name and a save button
when you click on the button it should change the p text to your full name
*/

const submitButton = document.getElementById('submit');
const p1 = document.getElementById('p1');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');

submitButton.addEventListener('click', updateParagraph);
submitButton.addEventListener('click', updateTable);

function updateParagraph() {
  p1.innerText = `Your full name is: ${firstName.value} ${lastName.value}`;
};

function updateTable() {
  const tableFirstName = document.getElementById('tableFirstName');
  const tableLastName = document.getElementById('tableLastName');

  tableFirstName.innerText = firstName.value;
  tableLastName.innerText = lastName.value;
};

