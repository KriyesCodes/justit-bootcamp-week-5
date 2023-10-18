/*
Which method is used to attach an event to a html element?
  addEventListener();
How can we access the value of a form input element?
  value property of the input element
What is the difference between attached event in html and in js file?
  we can attach multiple events via js
What is the syntax for addEventListener method?
  element.addEventListener('eventName', functionName);
write code which will attach an event to an element having an id='save'
  const saveButton = document.getElementById('save');
  saveButton.addEventListener('click', clickSave);
*/

// save the data in local storage
localStorage.setItem('name', 'kriyes');

// to get the data from local storage
console.log(localStorage.getItem('name'));

// to delete the data/key from local storage
console.log(localStorage.removeItem('name'));

// completely clear local storage
localStorage.clear();

// session storage - can be expired
// local storage

// String Methods
// we can write string in three different ways
let string = "This is\" a string";
let string1 = 'It\'s a string';
let string2 = `This is ${string1}`;

// slice(startIndex, endIndex) - endIndex is exclusive

// substring(startIndex, endIndex) - similar to slice but doesn't accept negative value
// negative values will be treated as 0 for substring

// substr(startIndex, numberOfCharacters) - deprecated, dont use

console.log('This is a sentence'.split(' '));