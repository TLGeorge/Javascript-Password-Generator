// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
    var passwordLength = prompt("How many characters would you like your password to contain? Please enter a number between 8 and 128.");
    // Validate that user enters valid character length.
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be a minimum of 8 characters and a maximum of 128");
        prompt("How many characters would you like your password to contain? Please enter a number between 8 and 128.")
    }
    var lowerPassword = prompt("Would You like your password to include lowercase letters? Please enter 'y' or 'n'.");
    var upperPassword = prompt("Would You like your password to include uppercase letters? Please enter 'y' or 'n'.");
    var numPassword = prompt("Would You like your password to include number? Please enter 'y' or 'n'.");
    var specialPassword = prompt("Would You like your password to include uppercase letters? Please enter 'y' or 'n'.");

    //Convert user response to lower cases
    var lowerPassword = lowerPassword.toLowerCase();
    var upperPassword = upperPassword.toLowerCase();
    var numPassword = numPassword.toLowerCase();
    var specialPassword = specialPassword.toLowerCase();

    // Validate that at least one of the password criteria were chosen.
    if (lowerPassword === 'n' || upperPassword === 'n' || numPassword === 'n' || specialPassword === 'n') {
        alert("Password must contain one of the given criteria of lowercase, uppercase, numeric or special. Select 'Generate Password' to try again.")
    }
})

// Character Sets (password criteria) that end-users choose (via prompts) to include or omit from their password; lower, upper, numeric and special.
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGJKLMNPRSTUVWXYZ";
var numeric = "0123456789";
var specialChar = "!@#$%&*()_+-=[]|,./?><";

// // Password created from selected criteria
// var securePassword = '';


// Function for generating Password to meet requirements set by end-user
// function generatePassword(passwordLength) {
//     var securePassword = '';
//     for (var i = 0; i < passwordLength; i++) {
//         securePassword + (lowercaseAt(Math.floor(Math.random()) * passwordLength))


// function appendSecurePassword

// Function for generating Password to meet requirements set by end-user
// function generatePassword(passwordLength) {
//     var password = '';
//     for (var i = 0; i < passwordLength; i++) {
//         securePassword + (lowercaseAt(Math.floor(Math.random()) * passwordLength))


//         if (passwordLength < 8 || passwordLength > 128) {
//             alert("Password must be a minimum of 8 characters and a maximum of 128");
//         else {

//             }
//         }
//         // Validate that user enters valid character length.
//         else {
//             alert("Password must be a minimum of 8 characters and a maximum of 128");
//         }

//         if (lowerPassword === 'y') {

//         }

//         if (numPassword === 'y') {

//         }

//         if (specialPassword === 'y') {

//         }
//         for (var i = 0; i < passwordLength; i++) {
//             var character = Math.floor(Math.random() * passwordLength) + 1;
//         }

//         return securePassword
//     }




// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}