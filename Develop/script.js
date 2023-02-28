// Assignment Code
var generateBtn = document.querySelector("#generate");

const passwordNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const passwordLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const passwordUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const passwordSymbols = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

function writePassword() {
  let password = "";
  const passwordLength = prompt("Enter password length");
  if (!(passwordLength > 7 && passwordLength < 129)) {
    alert("Password length does not meet requirements");
    return;
  }

  passwordRequirements = {
    lower: false,
    upper: false,
    numbers: false,
    symbols: false,
  };

  passwordRequirements.lower = confirm("Lowercase?\nOk for Yes\nCancel for No");
  passwordRequirements.upper = confirm("Uppercase?\nOk for Yes\nCancel for No");
  passwordRequirements.numbers = confirm("Numbers?\nOk for Yes\nCancel for No");
  passwordRequirements.symbols = confirm("Symbols?\nOk for Yes\nCancel for No");

  if (
    !passwordRequirements.lower &&
    !passwordRequirements.upper &&
    !passwordRequirements.numbers &&
    !passwordRequirements.symbols
  ) {
    alert("Password needs some requirements");
    return;
  }

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordLength.length);
    if (passwordRequirements.lower) {
      var randomNumber = Math.floor(Math.random() * passwordLower.length);
      password += passwordLower[randomNumber];
    }

    if (passwordRequirements.upper) {
      var randomNumber = Math.floor(Math.random() * passwordUpper.length);
      password += passwordUpper[randomNumber];
    }

    if (passwordRequirements.numbers) {
      var randomNumber = Math.floor(Math.random() * passwordNumbers.length);
      password += passwordNumbers[randomNumber];
    }

    if (passwordRequirements.symbols) {
      var randomNumber = Math.floor(Math.random() * passwordSymbols.length);
      password += passwordSymbols[randomNumber];
    }
  }

  password = password.slice(0, passwordLength);

  var shuffledPassword = password
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");

  document.getElementById("password").value = shuffledPassword;
}

generateBtn.addEventListener("click", writePassword);
