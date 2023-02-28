// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
function writePassword(){
  let password = "";
  const passwordLength = prompt("Enter password length");
  if(!(passwordLength>7 && passwordLength<129)){
   alert("Password length does not meet requirements");
   return;
  };

}

generateBtn.addEventListener("click", writePassword);
