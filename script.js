// 
// Assignment Code

var generateBtn = document.querySelector("#generate");
// var generateBtn = document.getElementById("generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var special = "!#%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "123456789";

// Write password to the #password input
function writePassword() {
  var params = {
    lowercase: confirm("Would you like to use lowercase characters?"),
    uppercase: confirm("Would you like to use uppercase characters?"),
    specialChars: confirm("Would you like to use special characters?"),
    numericChars: confirm("Would you like to use numeric characters?"),
  };

  debugger;

  while (
    params.length < 8 ||
    params.length > 128 ||
    params.length === undefined
  ) {
    params.length = parseInt(
      prompt(
        "How long would you like your password to be? Greater than 8 less than 128"
      )
    );
  }

  var password = generatePassword(params);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(options){
  var password = "";

  for (let i =0; i < options.length; i++) {
    if (options.uppercase) {
      password += getRandomValue(uppercase);
    }
    if (options.lowercase) {
      password += getRandomValue(lowercase);
    }
    if (options.specialChars) {
      password += getRandomValue(special);
    }
    if (options.numericChars) {
      password += getRandomValue(numbers);
    }

  }

 
  

  return password.slice(0, options.length);
}
  
  function getRandomValue(str) {
    console.log("random", Math.floor(Math.random() * str.length))
    console.log("str", str)
    return str[Math.floor(Math.random() * str.length)];
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  