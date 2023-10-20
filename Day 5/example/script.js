// Select the elements from the DOM we need to work with
const password = document.getElementById('password');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

// Function to generate a random 12 character password
function generatePassword() {
  // Declare a characters variable that is a string of characters we build our password from
  const characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Set a value for the length of our generated password
  const passwordLength = 12;
  // Declare an empty string that will store out password
  let passwordString = "";

  // loop through our characters string 12 times, selecting a random character each time
  for (let i = 0; i < passwordLength; ++i) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    // Add the character at the index our random number chooses to our password string
    passwordString += characters[randomNumber];
  }

  // Set the value of our password box to the readonly generated password string
  password.value = passwordString;
}

function copyPassword() {
  // copying the value of the passwordString to our clipboard
  navigator.clipboard.writeText(password.value);
  // Inform the user that password is copied to clipboard
  alert("Password copied to clipboard!");
}

// Add event listeners to the buttons for generating and copying password
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
