const container1 = document.getElementsByClassName('container')[0];
const container2 = document.getElementsByClassName('container')[1];

const image1Element = document.getElementById('image1');
const image2Element = document.getElementById('image2');
const image1Source = image1Element.src;
const image2Source = image2Element.src;

let swapped = false;

const swapButton = document.getElementsByClassName('swap-button')[0];
swapButton.addEventListener('click', swapImages);

function swapImages() {
  if (swapped) {
    image1Element.src = image1Source;
    image2Element.src = image2Source;
  }
  else {
    image1Element.src = image2Source;
    image2Element.src = image1Source;
  }

  swapped = !swapped;
}