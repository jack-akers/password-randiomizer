// Assignment Code
var generateBtn = document.querySelector("#generate");
var special =["!", "@", "#", "$", "%", "^", "&", "*", "?"]
var upper =['A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lower =['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var num =[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


function getRandomNumber(min, max) {
  var randomNumber=Math.random() 
  var randomNumberUpToMax=randomNumber * max 
  var randomNumberInRange= min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);
}
  function getRandomValueFromArray(generatedPassword) {
    var randomArrayPosition=getRandomNumber(0,generatedPassword.length);
    return generatedPassword[randomArrayPosition];

  }

function generatePassword() {
  var generatedPassword="";
  //make code to generate password

  var numberOfCharacters=prompt("How many characters in the password?");
  if (numberOfCharacters<8 || numberOfCharacters>128){
    alert("Please enter a valid password length between 8 - 128.");
    generatePassword()
  }else if(isNaN(numberOfCharacters)){
    alert("Please enter a valid password length between 8 - 128.");
    generatePassword()
  }

  var includeSpecialCharacters=confirm("Do you want special characters?");
if(includeSpecialCharacters){
  generatedPassword+= getRandomValueFromArray(special);
}
  var includeUpperCase=confirm("Do you want upper case letters?");
  if(includeUpperCase){
    generatedPassword+= getRandomValueFromArray(upper);
  }
  var includeLowerCase=confirm("Do you want lower case letters??");
  if(includeLowerCase){
    generatedPassword+= getRandomValueFromArray(lower);
  }
  var includeNumbers=confirm("Do you want numbers?");
  if(includeNumbers){
    generatedPassword+= getRandomValueFromArray(num);
  }
 
  for(i=generatedPassword.length; i<numberOfCharacters; i++){
    generatedPassword+= getRandomValueFromArray(lower);
  }

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
