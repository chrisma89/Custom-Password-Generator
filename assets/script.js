// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// -------------------------------------------------------------------------------------------------------------

// Function to prompt user for password options
function getPasswordOptions() {
  let megaArray = [];
  let essentialArray = [];
  let userInput =
    prompt("Please enter a number between 8 and 128 for your password's length")
  ;
  if(userInput === null){
    alert("Password generation cancelled")
    return null;
  }
  let passwordLength = parseInt(userInput)
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("you have chosen " + passwordLength + " as your password length");
  } else {
    do {
      passwordLength = parseInt(
        prompt(
          "Please enter a number between 8 and 128 for your password's length"
        )
      );
    } while (
      passwordLength < 8 ||
      passwordLength > 128 ||
      isNaN(passwordLength)
    );
    alert("you have chosen " + passwordLength + " as your password length");
  }

  let hasLowercase = confirm(
    "Would you like lower case letters? if yes, click ok"
  );
  let hasuppercase = confirm(
    "Would you like upper case letters? if yes, click ok"
  );
  let hasspecialCharacters = confirm(
    "Would you like special characters? if yes, click ok"
  );
  let hasNumbers = confirm("Would you like numbers? if yes, click ok");
  if (hasLowercase) {
    megaArray.push(...lowerCasedCharacters);
    randomElement = lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)];
    essentialArray.push(randomElement);
  }

  if (hasuppercase) {
    megaArray.push(...upperCasedCharacters);
    randomElement = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
    essentialArray.push(randomElement);
  }

  if (hasspecialCharacters) {
    megaArray.push(...specialCharacters);
    randomElement = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    essentialArray.push(randomElement);
  }

  if (hasNumbers) {
    megaArray.push(...numericCharacters);
    randomElement = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
    essentialArray.push(randomElement);
  }

  if (megaArray.length === 0) {
    alert("please choose atleast one character type");
    return getPasswordOptions();
   } 
 
  return getRandom(megaArray, essentialArray, passwordLength);
}

// Function for getting a random element from an array

function getRandom(megaArray, essentialArray, passwordLength) {
  let passwordArray = [];

  let userPasswordLength = passwordLength - essentialArray.length;

  for (let i = 0; i < userPasswordLength; i++) {
    let randomIndex = Math.floor(Math.random() * megaArray.length);
    passwordArray.push(megaArray[randomIndex]);
  }
  passwordArray.push(...essentialArray);
  passwordArray1 = passwordArray.join("");

  let password = passwordArray1;
  return password;
}

// Function to generate password with user input
function generatePassword() {
  return getPasswordOptions();
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
