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

//!TASK
/*
in HTML page
a h1 with id, three paragraphs, a h2, h3 with same classes.
With JS:
change the text of h1 to 'JavaScript DOM'
change the text of h2, h3 to 'Text Changed using JS'
change the text of all three paragraphs to whatever you want.
*/