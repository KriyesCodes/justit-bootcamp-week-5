/*
What is DOM?
  Document Object Model
How to select an elemeent using it's Id?
  method getElementById
How can we select an element using it's class name?
  method getElementsByClassName
How can we select an element using tag?
  method getElementsByTagName
How can we change text of a HTML element?
  innerText or textContent property
What is the difference between querySelector and querySelectorAll methods?
  querySelector selects the first element found of that query, querySelectorAll returns all found elements as a list
How can we create a a new element?
  createElement method
How can we remove an element?
  remove method
How can we add class to a html element?
  classList.add() method
How can we remove a class from a html element?
  classList.remove() method
How can we add an attribute to a html element?
  setAttribute method
How can we remove an attribute of a html element?
  removeAttribute method
*/

const hideButton = document.getElementById('hide-button');
console.log(hideButton);

hideButton.addEventListener('click', hideButtonOnClick);

function hideButtonOnClick() {
  const p1 = document.getElementById('p1');
  if (p1.style.display === 'none') {
    p1.style.display = 'block';
  }
  else {
    p1.style.display = 'none';
  }
}

let jumpscare = () => {
  alert("JUMPSCARE!");
}

const clickButton = document.getElementById('alert-button');
clickButton.addEventListener('click', jumpscare);