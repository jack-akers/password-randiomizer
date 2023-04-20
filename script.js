// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var generatedPassword="";
  //make code to generate password
  //1-ask how many char
  var numberOfCharacters=prompt("How many characters in the password?");
  //2-ask if special char
  var includeSpecialCharacters=confirm("Do you want special characters?");
  //3-ask if upper case
  var includeUpperCase=confirm("Do you want upper case letters?");
  //4-ask if lower case
  var includeLowerCase=confirm("Do you want lower case letters??");
  //5-ask if num
  var includeNumbers=confirm("Do you want numbers?");
  //6-generate pass
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
