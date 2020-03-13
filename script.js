// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
    var passwordLength = Number(prompt("How many characters would you like your password to contain? Please enter a number between 8 and 128."));
    var lowerPassword = prompt("Would You like your password to include lowercase letters? Please enter 'Yes' or 'No'.");
    var upperPassword = prompt("Would You like your password to include uppercase letters? Please enter 'Yes' or 'No'.");
    var numPassword = prompt("Would You like your password to include number? Please enter 'Yes' or 'No'.");
    var specialPassword = prompt("Would You like your password to include uppercase letters? Please enter 'Yes' or 'No'.");
})

// var securePassword 

// var passwordLength = Number(prompt("How many characters would you like your password to contain? Please enter a number between 8 and 128."));
// var lowerPassword = prompt("Would You like your password to include lowercase letters? Please enter 'Yes' or 'No'.");
// var upperPassword = prompt("Would You like your password to include uppercase letters? Please enter 'Yes' or 'No'.");
// var numPassword = prompt("Would You like your password to include number? Please enter 'Yes' or 'No'.");
// var specialPassword = prompt("Would You like your password to include uppercase letters? Please enter 'Yes' or 'No'.");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGJKLMNPRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%&*()_+-=[]|,./?><";
var allAllowed = "abcdefghijklmnopqrstuvwxyzABCDEFGJKLMNPRSTUVWXYZ0123456789!@#$%&*()_+-=[]|,./?><";


// Function for returning Password to end-user
function generatePassword() {
    return 'password that was generated'
}

if (passwordLength >= 8 && passwordLength <= 128) {

}

if (lowerPassword === 'Yes' || lowerPassword === 'yes') {

}

if (numPassword === 'Yes' || numPassword === 'yes') {

}

if (specialPassword === 'Yes' || numPassword === 'yes') {

}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
