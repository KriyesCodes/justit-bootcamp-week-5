//!TASK
/*
in HTML page
a h1 with id, three paragraphs, a h2, h3 with same classes.
With JS:
change the text of h1 to 'JavaScript DOM'
change the text of h2, h3 to 'Text Changed using JS'
change the text of all three paragraphs to whatever you want.
*/

document.getElementById('title').innerHTML = 'JavaScript DOM';

const paragraphs = document.getElementsByTagName('p');

for (paragraph of paragraphs) {
  paragraph.innerHTML = 'This paragraph is cool now';
}

const headings = document.getElementsByClassName('small-title');

for (heading of headings) {
  heading.innerHTML = 'Text Changed using JS';
}

/*
!TASK
add a div in the HTML
Create a h1 with text using JS and put it inside the div
Change font size, text and background color to whatever you want
*/