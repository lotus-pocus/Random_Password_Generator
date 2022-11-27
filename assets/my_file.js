//DOM Elements

var resultEl = document.getElementById('password');
var generateEl = document.getElementById('generate');





// Function to prompt user for password options





var length = prompt('How many characters between 10 to 64 would you like to use in your password?');

var num1 = Number (length);



console.log (num1);


var special = confirm('would you like to include special characters? Click ok to confirm');

if (special === true) {
  var specialResult = randomSpecialCharacters + length
} else if (special===false){
  var specialResult = randomLowerCasedCharacters + randomNumericCharacters + randomUpperCasedCharacters + length
}

console.log (special);

var lowercase = confirm('would you like to include lowercase characters? Click ok to confirm');

var uppercase = confirm('Would you like to include uppercase characters? Click ok to confirm');

var numbers = confirm('Would you like to include numbers? Click ok to confirm');

var result = special + lowercase + uppercase + numbers;



// Function for getting a random element from an array
function getRandom(arr) {

}



var randomSpecialCharacters = specialCharacters[Math.floor(Math.random() * 23)];
var randomLowerCasedCharacters = lowerCasedCharacters[Math.floor(Math.random() * 26)];
var randomUpperCasedCharacters = upperCasedCharacters[Math.floor(Math.random() * 26)];
var randomNumericCharacters = numericCharacters[Math.floor(Math.random() * 10)];

console.log (randomLowerCasedCharacters);

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button



generateBtn.addEventListener('click', () => {
  var num1 = +passwordLength.valueof;
});


// generateBtn.addEventListener('click', writePassword);