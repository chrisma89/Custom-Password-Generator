// Array of special characters to be included in password
var specialCharacters = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[", "~","-","_",".",];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["a","b","c","d","e","f","g","h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z",]

// Array of uppercase characters to be included in password
var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I", "J","K","L","M","N","O","P","Q","R", "S","T","U","V","W","X","Y","Z",];


// -------------------------------------------------------------------------------------------------------------

// Function to prompt user for password options
function getPasswordOptions() {
  let megaArray = [];
  let essentialArray =[];
  let passwordLength = parseInt(prompt("Please enter a number between 8 and 128 for your password's length"))
     if (passwordLength >= 8 && passwordLength <= 128){
    alert("you have chosen " + passwordLength + " as your password length")
     }

  else {
    do{
       passwordLength = parseInt(prompt("Please enter a number between 8 and 128 for your password's length"))}
     while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength))
     alert("you have chosen " + passwordLength + " as your password length")
    }
    
   
  let hasLowercase = confirm("Would you like lower case letters? if yes, click ok")
let hasuppercase = confirm("Would you like upper case letters? if yes, click ok")
let hasspecialCharacters = confirm("Would you like special charaxters? if yes, click ok")
let hasNumbers = confirm("Would you like numbers? if yes, click ok")
  if (hasLowercase){
   
     megaArray.push(...lowerCasedCharacters);
    randomElement = lowerCasedCharacters[Math.floor(Math.random() * 25)]
    essentialArray.push(randomElement)
    console.log(randomElement)
  }
  
  if (hasuppercase){
   
     megaArray.push(...upperCasedCharacters);
    randomElement = upperCasedCharacters[Math.floor(Math.random() * 25)]
    essentialArray.push(randomElement)
  }
  

  if (hasspecialCharacters){
    megaArray.push(...specialCharacters);
    randomElement = specialCharacters[Math.floor(Math.random() * 23)]
    essentialArray.push(randomElement)
  }
  
 if (hasNumbers){
  
    megaArray.push(...numericCharacters);
    randomElement = numericCharacters[Math.floor(Math.random() * 10)]
    essentialArray.push(randomElement)
  }

  if (megaArray.length === 0){
    alert("please choose atleast one character type")
    getPasswordOptions();
  }
return getRandom(megaArray,essentialArray,passwordLength)
}

// Function for getting a random element from an array

function getRandom(megaArray,essentialArray,passwordLength) {
  let passwordArray =[];
  
 let userPasswordLength = passwordLength - essentialArray.length

  for (let i=0; i < userPasswordLength ; i++){
    let randomIndex = Math.floor(Math.random() * megaArray.length);
    passwordArray.push(megaArray[randomIndex])
  } 
  passwordArray.push(...essentialArray)
  passwordArray1 = passwordArray.join("")

  let password = passwordArray1
  return password
}

// Function to generate password with user input
function generatePassword(passwordArray1) {
 return  getPasswordOptions()
 
  

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// ------------------------------------------------------------------------------------------------------------------------------

// // Function for getting a random element from an array

// const generatedPassword = "";
// let passwordArray = [];

// function getRandom(megaArray, passwordlength, chosenArray) {
//   passwordArray = [];
//   let password = "";
//   let chosenlength = passwordlength - chosenArray.length;
//   for (let i = 0; i < chosenlength; i++) {
//     let passwordArrayrandom =
//       megaArray[Math.floor(Math.random() * megaArray.length)];
//     password = passwordArray.push(passwordArrayrandom);
//   }
//   return passwordArray.join("");
// }

// // Function to generate and print password
// function generatePassword() {
//   let chosenArray = [];
//   let userinputlength;
//   userinputlength = prompt(
//     "Please input a number between 8 to 128 for your desired password length"
//   );
//   // while (true) {
//     if (userinputlength === null) {
//       alert("Password generation cancelled");
//       return null;
//     }
//     let passwordlength = parseInt(userinputlength);
//     if (isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128) {
//       userinputlength = prompt(
//         "Invalid input. Please type in a number starting from 8 to 128"
//       );
//     } else {
//       alert(`You have chosen ${passwordlength} characters for your password`);
//       let megaArray = getPasswordOptions(chosenArray);
//       if (megaArray === null){
//         megaArray = getPasswordOptions(chosenArray);
//       }
//       if (megaArray.length > 0) {
//         chosenArray = chosenArray.join("");
//         password = getRandom(megaArray, passwordlength, chosenArray).concat(
//           chosenArray
//         );
//         return password;
//       }
//     }
//   // }
// }

// // Function to prompt user for password options
// function getPasswordOptions(chosenArray) {
//   // const 
  
  

//   let megaArray = [];
//   const hasLowercase = confirm("Click OK for lowercase characters.")
//   const hasUppercase = confirm("Click OK for Uppercase characters.")
//   const hasNumbers = confirm("Click OK for numbers")
//   const hasSpecialCharacters = confirm("Click OK for special characters.")

//   if (!hasLowercase && !hasNumbers && !hasUppercase && !hasSpecialCharacters){
//     alert("Please include atleast one character type");
//     getPasswordOptions();
//   }
//   else if(hasLowercase) {
//      megaArray.push(lowerCasedCharacters)
//   }
//   else if (hasUppercase){
//     megaArray.push(upperCasedCharacters)
//   }
//   else if(specialCharacters) {
//     megaArray.push(specialCharacters)
//  }
//  else if (hasNumbers){
//    megaArray.push(numericCharacters)
//  }
//  console.log(megaArray)
  // for (let key in parentArray) {
  //   let chosenArrayoption = prompt(
  //     `Would you like ${key} in your password? Please type in 'yes' or 'no' in the box below.`
  //   );
  //   if (chosenArrayoption === null) {
  //     return null;
  //   }
  //   while (chosenArrayoption !== "yes" && chosenArrayoption !== "no") {
  //     // alert("Please type in yes or no for each option")
  //     chosenArrayoption = prompt(
  //       `Would you like ${key} in your password? Please type in 'yes' or 'no' in the box below.`
  //     );
  //   }

  //   if (chosenArrayoption.toLowerCase().trim() === "yes") {
  //     let array = parentArray[key];
  //     const index = [Math.floor(Math.random() * array.length)];
  //     chosenArray.push(array[index]);
  //     console.log(chosenArray);
  //     megaArray = megaArray.concat(array);
  //     console.log(megaArray);
  //   }
  //   if (chosenArrayoption === null) {
  //     return;
  //   }
  // }
  // if (megaArray.length === 0) {
  //   alert(
  //     "Please choose one character type to generate your password. Click OK to continue"
  //   );
  //   generatePassword();
  // }
  // return megaArray;
// }

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// // Function to generate password with user input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   console.log(password);
//   passwordText.value = "";
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // GRADER COMMENTS _
// // but if you repeat password generation without refreshing the browser, the logic gets broken.

// // When I enter a valid password length and input a value of "no" for the remaining 4 options, a validation message is displayed indicating that at least one option must be chosen. Excellent! However, in the next prompt message that requests the user to opt for "numeric" characters, when I enter "yes", an error is displayed in the Chrome Developer Tools console "TypeError: Cannot read properties of undefined (reading 'push') at getPasswordOptions (script.js:82:31)..at getPasswordOptions (script.js:94:19)..at generatePassword (script.js:52:30)". In the file "assets/script.js", check the logic in the function "getPasswordOptions" (line #94)
