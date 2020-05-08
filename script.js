var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
var specialChars = ["#", "$", "%", "&", "'", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`"]

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
};

function generatePassword() {
  var length = prompt(
    "Congratulations!\nYou are one step closer to securing your future. Please enter the number of characters you would like to generate.\n\nIn other words, how long do you want your password to be?\nPlease choose\nNo less than 8\nNo more than 128"  
    );
    
    length = parseInt(length)
    
    if (isNaN(length)) {
      alert("Invalid Length\n\nTry Again")
      return "Not a valid number";
    };
    if (length < 8) {
      alert("Invalid Length\n\nTry Again");
      return "Not a valid number";
    };
    if (length > 129) {
      alert("Invalid Length\n\nTry Again");
      return "Not a valid number";
    };
    
    var specialChars = confirm(
      "Click OK to include special characters (%#^&)"
    );
    
    var numericChars = confirm(
      "Click OK to include numeric characters (1234)"
    );
    
    var uppercaseChars = confirm(
      "Click OK to include lowercase characters (abcd)"
    );
    var lowercaseChars = confirm(
      "Click OK to include uppercase characters (ABCD)"
    );
    
    if (
      !specialChars &&
      !numericChars &&
      !lowercaseChars&&
      !uppercaseChars
    ) {
      alert("You need to select at least one!");
      return;
    }
    
    for (var i = 0; i < length; i++) {
      if (specialChars) {
        password += getRandomValue(specialChars);
      }
      if (numericChars) {
        password += getRandomValue(numericChars);
      }
      if (uppercaseChars) {
        password += getRandomValue(uppercaseChars);
      }
      if (lowercaseChars) {
        password += getRandomValue(lowercaseChars);
      }
  }
    
    return password.slice(0, length);
}

function getRandomValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);