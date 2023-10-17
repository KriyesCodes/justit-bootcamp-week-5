const button = document.getElementById('btnClick');
const text = document.getElementById('txtName');

button.addEventListener('click', updateParagraph);

function updateParagraph() {
  console.log('click works');
  const p1 = document.getElementById('p1');
  p1.innerText = `Hey, how are you doing ${text.value}`;
}