// Assignment Code
var generateBtn = document.querySelector("#generate");


var numberCharacters = "0123456789";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwsyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWSYZ";
var specialCharacters = "!@#$%&()_";

function generatePassword() {
  var passwordLength = window.prompt("Enter password length from 8 to 128");
    if (8 > passwordLength || 128 < passwordLength) {
      alert("Please enter a value from 8 to 128.");
      return "";
  }

  var includeLowercase = confirm("Include lowercase characters?");

  var includeUppercase = confirm("Include uppercase characters?");

  var includeNumeric = confirm("Include numeric characters?");

  var includeSpecial = confirm("Include numeric characters?");

  var characters = "";

  if (includeLowercase) {
    characters += lowercaseCharacters;
  }
  if (includeUppercase) {
    characters += uppercaseCharacters;
  }
  if (includeNumeric) {
    characters += numberCharacters;
  }
  if (includeSpecial) {
    characters += specialCharacters;
  }

  var pass = "";

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    pass += characters.substring(randomNumber, randomNumber +1);
   }

   return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
