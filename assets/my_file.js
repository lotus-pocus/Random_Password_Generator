

// Function to prompt user for password options

function getPasswordOptions () {
  //ensure length returns a number within the requested length

  var passwordLength = parseInt ( prompt ('How many characters between 10 to 64 would you like to use in your password?'));
  
  if (passwordLength <10) {
    alert ('Password length must be more than 10 characters');
    return;
  }

  
  if (passwordLength > 64) {
    alert ('Password length must be less than 64 characters');
    return;
  }

  //add confirms for special characters, lowercase, uppercase, numeric

  var special = confirm ('would you like to include special characters? Click ok to confirm');

  var lowercase = confirm ('would you like to include lowercase characters? Click ok to confirm');

  var uppercase = confirm ('Would you like to include uppercase characters? Click ok to confirm');

  var numbers = confirm ('Would you like to include numbers? Click ok to confirm');

  //ensure atleast one of the options is selected

  if (
    special === false &&
    lowercase === false &&
    uppercase === false &&
    numbers === false
  ) {
    alert ('Please select a character type');
    return;
  }

//arrays to store random selection of chosen characters

  var addSpecial = [];

  var addLowercase = [];

  var addUppercase = [];

  var addNumbers = [];

  var selectedCharacters = [addSpecial, addLowercase, addUppercase, addNumbers];

  var possibleCharacters = [special, lowercase, uppercase, numbers];

  //functions to return random selection of characters

  if (special === true) {
    addSpecial.push (specialCharacters[Math.floor(Math.random() * 23)]);
  }

  if (lowercase === true) {
    addLowercase.push (lowerCasedCharacters[Math.floor(Math.random() * 26)]);
  }

  if (uppercase === true) {
    addUppercase.push (upperCasedCharacters[Math.floor(Math.random() * 26)]);
  }

  if (numbers === true) {
    addNumbers.push (numericCharacters[Math.floor(Math.random() * 10)]);
  }

  console.log (possibleCharacters);
  //loop to cycle through

  for (var i = 0; i < options.length; i++) {
    
    var possibleCharacters = getPasswordOptions (selectedCharacters);
    result.push (possibleCharacters);

  }

 

};



// Function for getting a random element from an array
function getRandom(arr) {
  var randomSpecialCharacters = specialCharacters[Math.floor(Math.random() * 23)];
  var randomLowerCasedCharacters = lowerCasedCharacters[Math.floor(Math.random() * 26)];
  var randomUpperCasedCharacters = upperCasedCharacters[Math.floor(Math.random() * 26)];
  var randomNumericCharacters = numericCharacters[Math.floor(Math.random() * 10)];

  return {
    specialChar: randomSpecialCharacters,
    lowercase: randomLowerCasedCharacters,
    uppercase: randomUpperCasedCharacters,
    numericChar: randomNumericCharacters
  };
};

// var completeRandomResults = getRandom;

// var randomSpecialCharacters = specialCharacters[Math.floor(Math.random() * 23)];
// var randomLowerCasedCharacters = lowerCasedCharacters[Math.floor(Math.random() * 26)];
// var randomUpperCasedCharacters = upperCasedCharacters[Math.floor(Math.random() * 26)];
// var randomNumericCharacters = numericCharacters[Math.floor(Math.random() * 10)];

// console.log(randomLowerCasedCharacters);

// var results [
//   special,
//   lowercase,
//   uppercase,
//   numericCharacters
// ];

// console.log (results);

// Function to generate password with user input
function generatePassword() {
var options = getPasswordOptions();
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