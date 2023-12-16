
// Pseudocode 
// 1.Generate a password when the button is clicked
//!2.Present a series of prompts for password criteria
//! 3.Length of password
//! At least 8 characters but no more than 128.
// 4. Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// 5.Code should validate for each input and at least one character type should be selected
// 6.Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// Prompts - Welcome/ Length/character types/ prompt to click button when ready


const charOptions = [];
const generatedPassword = '';
// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length
  // At least 8 characters, no more than 128 characters
  // Conditional to check that the number that was entered is in range
  // Prompts store data as strings, so need to parse into a number
  // If the user's input is out of range, either return out of the function or call the function again

  // Confirm which character sets to use
  // If the user answers false for all, either return out of the function or call the function again
  
  // Once they select a character set:
  // Generate a random character for each selected character set
  // Either push selected character sets to a mega-array of all selected characters
  // OR you can keep the arrays separate and generate a random number to select the array and another to select the index
  
  // Once character sets are selected, move on to generating random characters
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Need a variable to hold the password as it's being generated
  // Need a variable to hold the index that's being generated

  // For loop that loops the number of times that matches the length the user chose
  // Generate a random number
  // That number is the index for a character in the mega-array
  // So then, mega-array[generated-index] is the actual character
  // Add that character to the password

  // Once we finish the for loop, return the generated password
}
 

//---------------------------------------------------------Start of my code----------------------------
// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~',
  '-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options


generatePassword()


// Function for getting a random element from an array
function getRandom(arr) {
  
}


function generatePassword() {

  let userinputlength;
      userinputlength = prompt("Please choose a number between 8 and 128 and type it in the box below");
    
    while(true){
    let length =parseInt(userinputlength)
     
      if (isNaN(length) || length < 8 || length > 128) {
     userinputlength = prompt("Invalid input. Please choose again")}
          else {
            alert(`You have chosen ${length} as the length of your password`)
            return length
          }
        }
      }
      // getPasswordOptions()
      
        // Function to prompt user for password options
        function getPasswordOptions() {
              console.log("inside.passwordoptions")
          const parentArray = {numericCharacters, specialCharacters, upperCasedCharacters, lowerCasedCharacters};
          let chosenArray =[];


          for (let key in parentArray ) {
      
            let chosenArrayoption = prompt(`Would you like ${key} in your password? Please type in 'yes' or 'no' in the box below`)
              if ((chosenArrayoption).toLowerCase() === "yes" ) {
              
                  let randomCharacter = parentArray[key][Math.floor(Math.random()*parentArray[key].length)]
                  chosenArray.push(randomCharacter);
                  console.log(chosenArray)
                  }
                  // else if ((chosenArrayoption).toLowerCase() === "no") {
                  //   alert("Ok , Thank you")
                  // }
                  else {
                    prompt("Please choose atleast one character type")
                  }
          } 
        } 
        getPasswordOptions();
      
       
        // Confirm which character sets to use
          // If the user answers false for all, either return out of the function or call the function again
          
          // Once they select a character set:
          // Generate a random character for each selected character set
          // Either push selected character sets to a mega-array of all selected characters
          // OR you can keep the arrays separate and generate a random number to select the array and another to select the index
          
          // Once character sets are selected, move on to generating random characters

  
   
//         const userChoicetypechosen = prompt("Would you like numbers in your password? Please type in 'yes' or 'no")

//         if (userChoicetypechosen === "yes") {
//     alert (`You have chosen numbers in your password`)
//           }
//   else if (userChoicetypechosen === "no" ){
//     prompt("Would you like special characters in your password?")
//   }
//   return;
// }



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// Function to generate password with user input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
    
  

    
// // Function to generate password with user input
// function generatePassword() {
//   let userChoicetypechosen = prompt("The options are 1. Numbers  2. Special Characters 3. Capital alphabet letters 4. Small alphabet letters. Please enter an option of 1 to 4 in the box below")

//   if (userChoicetypechosen === "1" || userChoicetypechosen === "2" || userChoicetypechosen === "3" || userChoicetypechosen === "4") {
//     alert (`You have chosen ${userChoicetypechosen} as your choice of character type`)
//   }
//   else {
//     prompt("Input Invalid. Please choose again")
//   }
//   return;
// }
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


