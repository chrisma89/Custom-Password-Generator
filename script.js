// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options



function getPasswordOptions() {

let userinputlength;

userinputlength = prompt("Please choose a number between 8 and 128 and type it in the box below");

while(true){
let length =parseInt(userinputlength)
 
  if (isNaN(length) || length < 8 || length >128){
 userinputlength = prompt("Invalid input. Please choose again")}
      else {
        prompt(`You have chosen ${length} as the length of your password`)
        return length
      }
}
}



getPasswordOptions()
// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Pseudocode 
// 1.Generate a password when the button is clicked
// 2.Present a series of prompts for password criteria
// 3.Length of password
// At least 8 characters but no more than 128.
// 4. Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// 5.Code should validate for each input and at least one character type should be selected
// 6.Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// Prompts - Welcome/ Length/character types/ prompt to click button when ready


