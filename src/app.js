// Get the necessary elements from the DOM
const passInput = document.getElementById("pass");
const generateBtn = document.getElementById("gen");
const resetBtn = document.getElementById("reset");
const lenSelect = document.getElementById("len");
const uppercaseCheckbox = document.getElementById("up");
const lowercaseCheckbox = document.getElementById("low");
const specialCharactersCheckbox = document.getElementById("spec");
const numbersCheckbox = document.getElementById("num");

// Define character sets for password generation
const charsets = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  special: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  numbers: "0123456789",
};

// Generate a random character from a given character set
function getRandomChar(charset) {
  const randomIndex = Math.floor(Math.random() * charset.length);
  return charset[randomIndex];
}

// Generate the password based on selected options
function generatePassword() {
  let password = "";
  const selectedCharsets = [];

  uppercaseCheckbox.checked = true;
  lowercaseCheckbox.checked = true;

  // Determine which character sets were selected
  if (uppercaseCheckbox.checked) {
    selectedCharsets.push(charsets.uppercase);
  }
  if (lowercaseCheckbox.checked) {
    selectedCharsets.push(charsets.lowercase);
  }
  if (specialCharactersCheckbox.checked) {
    selectedCharsets.push(charsets.special);
  }
  if (numbersCheckbox.checked) {
    selectedCharsets.push(charsets.numbers);
  }

  // Generate the password of the specified length
  const passwordLength = lenSelect.value;
  for (let i = 0; i < passwordLength; i++) {
    const randomCharsetIndex = Math.floor(
      Math.random() * selectedCharsets.length
    );
    const randomCharset = selectedCharsets[randomCharsetIndex];
    password += getRandomChar(randomCharset);
  }

  // Update the password input value
  passInput.value = password;
}

// Reset the form to its initial state
function resetForm() {
  passInput.value = "";
  lenSelect.value = "8";
  uppercaseCheckbox.checked = true;
  lowercaseCheckbox.checked = true;
  specialCharactersCheckbox.checked = false;
  numbersCheckbox.checked = false;
}

// Add event listeners to the generate and reset buttons
generateBtn.addEventListener("click", copy2Clip);
resetBtn.addEventListener("click", generatePassword);

// when page is loaded a password is generated
window.onload = function () {
  generatePassword();
};

function reGen(){
    generatePassword();
}

function copy2Clip(){
    passInput.select();
    passInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(passInput.value);
}