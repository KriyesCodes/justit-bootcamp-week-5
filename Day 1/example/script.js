/*
RECAP:
What is a function in JS?
  block of code to perform a specific task
What is object in JS?
  data type - an entity which can have multiple properties
What is an array?
  multiple values in single variable
What is difference between let, var and const while declaring a variable?
  let is used for variables of which values might change
  const is used for variables that will not change value
  var is an old way of declaring variables which is function scoped instead of block scoped
*/

// DOM - Document Object Model
// Objective
/*
  --Explore the key concept of DOM
  --How to access HTML Elements
  --How to manipulate HTML Elements
*/

// getElementById

const title = document.getElementById('title');
console.log(title);

// getElementByTagName

const paragraphs = document.getElementsByTagName('p');
// getElementsByTagName returns an array
console.log(paragraphs[1]);

// getElementByClassName

const h2 = document.getElementsByClassName('headingTwo');
// getElementByClassName also returns an array
console.log(h2[0]);

// How can we list all elements

for (let i = 0; i < h2.length; ++i) {
  console.log(h2[i]);
}


// querySelector
//selector
const textInput = document.querySelector('input[type="text"]');
// only returns the first match
console.log(textInput);


// querySelectorAll
const multipleElements = document.querySelectorAll('.headingTwo, #title, p');
// returns all elements as an array
console.log(multipleElements);

const listItems = document.querySelectorAll('ul>li:nth-child(odd)');
console.log(listItems);

title.innerText = "JavaScript Document Object Model";

// styling HTML Elements
title.style.color = "rgb(245, 23, 30)";
title.style.cssText =
  `color: dodgerblue;
  background-color: lightpink;
  `;

// Create a new element and add it to the document

const ul = document.querySelector('ul');
console.log(ul);
// createElement()
const newListItem = document.createElement('li');

// Add the <li> to the store ul

ul.append(newListItem);

// Add text to the list item

newListItem.innerHTML = 'new Fourth Item';

// Add an ID to an element

newListItem.setAttribute('id', 'fourthItem');

// Remove an attribute from an element
newListItem.removeAttribute('id');

title.removeAttribute('id');

// Adding class to an element
newListItem.classList.add('newItem');

newListItem.classList.remove('newItem');

// Remove an element
newListItem.remove();
console.log(newListItem);

