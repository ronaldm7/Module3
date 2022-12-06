// Assignment code here
function generatePassword(){
  var numericchar = ['0','1','2','3','4','5','6','7','8','9'];
  var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleChar = [];

// length of password
  numberofchar = prompt("password length min 8-128 max");
  if (numberofchar < 8 || numberofchar > 128) {
    return "choose right amount of characters";
  }
// password criteria prompts
  uppercase = confirm("Do you want uppercase characters?");
  lowercase = confirm("Do you want lowercase characters?");
  number = confirm("Do you want numbers?");
  special = confirm("Do you want special(!,@,#,$) characters?");

  // checks if atleast one of the password criteria is answererd
  if (uppercase === false && lowercase === false && number === false && special === false){
    return "pick atleast one type of password type";
  };


if (uppercase) {
  possibleChar = possibleChar.concat(uppercaseChar);
}
if (lowercase) {
  possibleChar = possibleChar.concat(lowercaseChar);
}
if (number) {
  possibleChar = possibleChar.concat(numericchar);
}
if (special) {
  possibleChar = possibleChar.concat(specialChar);
}


let finalPassword = ""
  for (let i = 0; i < numberofchar; i++) {
    let rng =[Math.floor(Math.random() * possibleChar.length)];
    // or finalPassword += possibleCharacters[rng];
    finalPassword = finalPassword + possibleChar[rng];
  }
  return finalPassword;

};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
