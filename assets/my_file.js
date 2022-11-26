//DOM Elements

var resultEl = document.getElementById ('password');
var generateEl = document.getElementById ('generate');





// Function to prompt user for password options



var passwordLength = prompt ('How many characters between 10 to 64 would you like to use in your password?');


var special = confirm ('would you like to include special characters?');



generateEl.addEventListener('click',() =>{
  var length = +passwordLength.valueof;

  console.log (typeof length);
})







// var randomSelect {
//   special: randomSpecialCharacters,
//   lower: randomLowerCasedCharacters,
//   upper: randomUpperCasedCharacters,
//   number: randomNumericCharacters
// };


var randomSpecialCharacters = specialCharacters [Math.floor (Math.random()*23)];
var randomLowerCasedCharacters = lowerCasedCharacters [Math.floor (Math.random()*26)];
var randomUpperCasedCharacters = upperCasedCharacters [Math.floor (Math.random()*26)];
var randomNumericCharacters = numericCharacters [Math.floor (Math.random()*10)];





// if (lengthResponse=== < 10 || > 64) [

// ]


// if (passwordLength ==)
// function getPasswordOptions() {

// }

// Function for getting a random element from an array
function getRandom(arr) {

}

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
generateBtn.addEventListener('click', writePassword);