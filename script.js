// Assignment Code
var generateBtn = document.querySelector("#generate");
// var generateBtn = document.getElementById("generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toUpperCase();
var special = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numbers = "0123456789"
// Write password to the #password input
function writePassword() {
  var params = {
    lowercase: confirm("Would you like to use lowercase characters?"),
    uppercase: confirm("Would you like to use uppercase characters?"),
    specialChars: confirm("Would you like to use special characters?"),
    numericChars: confirm("Would you like to use numeric characters?")
  };

  while (
    params.length < 8 ||
    params.length > 128 ||
    params.length === undefined
  ) {
    params.length = parseInt(
      prompt("How long would you like your password to be? Greater than 8 but less than 128."
      ),
    )
  }
  

        var password = generatePassword(params); 
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
}


function generatePassword(options) {
  if (options.uppercase) {
    password += getRandomValue(uppercase);
    }
  if (options.lowercase) {
    password += getRandomValue(lowercase);
  }
  if (options.specialChars) {
    password += getRandomValue(special);
  }
  if (options.lowercase) {
    password += getRandomValue(numbers);
  }
return password.slice(0, options.length)
}
     
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria/
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page