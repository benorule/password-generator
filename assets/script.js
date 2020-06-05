// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate the password itself
function generatePassword() {

  // Using repeatOne variable for while loop that will end when a valid input has been given
  var repeatOne = false;

  // Recieving length of password from user
  while (!repeatOne) {
    var lengthPassword = prompt("How long should the password be? Must be between 8 and 128 characters.");
    if ((lengthPassword < 8) || (lengthPassword > 128) || (lengthPassword == "")) {
      alert("Invalid input."); // Will repeat the loop
    }
    else {
      repeatOne = true; // Ends the while loop
    }
  }
  var passwordLength = parseInt(lengthPassword);
  console.log(passwordLength);


  var charSelect = ["Lowercase", "Uppercase", "Numeric", "Special"]; // Using array to store list of character types

  // Receiving character type selection from user
  var lowercaseChar = confirm("Do you want to include " + charSelect[0].toLowerCase() + " characters in the password?");
  var uppercaseChar = confirm("Do you want to include " + charSelect[1].toLowerCase() + " characters in the password?");
  var numericChar = confirm("Do you want to include " + charSelect[2].toLowerCase() + " characters in the password?");
  var specialChar = confirm("Do you want to include " + charSelect[3].toLowerCase() + " characters in the password?");

  // Adding characters to character set to be used in the generation of the password
  var passwordChar = (""); // Empty variable for the character set to exist in

  // Using repeatTwo variable for while loop that will end when all character types selected are added to passwordChar
  var repeatTwo = false;

  while (!repeatTwo) {
    if (lowercaseChar === true) {
      passwordChar += "abcdefghijklmnopqrstuvwxyz";
      console.log(passwordChar);
      lowercaseChar = false; // This if statement will be skipped next time in the while loop
    }
    else if (uppercaseChar === true) {
      passwordChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      console.log(passwordChar);
      uppercaseChar = false; // This if statement will be skipped next time in the while loop
    }
    else if (numericChar === true) {
      passwordChar += "0123456789";
      console.log(passwordChar);
      numericChar = false; // This if statement will be skipped next time in the while loop
    }
    else if (specialChar === true) {
      passwordChar += "!@#$%^&*";
      console.log(passwordChar);
      specialChar = false; // This if statement will be skipped next time in the while loop
    }
    else {
      repeatTwo = true; // Ends the while loop
    }
  }

  passwordMade = (""); // Empty variable for the password to exist in
  // For loop to generate password using criteria established
  for (var i = 0, n = passwordChar.length; i < passwordLength; ++i) {
    passwordMade += passwordChar.charAt(Math.floor(Math.random() * n));
  }
  return passwordMade;
}

function PasswordWrite() {
  var password = generatePassword();
  console.log(password);
  alert(password);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
