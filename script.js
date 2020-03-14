// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = "0"
var lowerPassword = '';
var upperPassword = '';
var numPassword = '';
var specialPassword = '';

//Convert user response to lower case so it will match 'y' or 'n'.
var lowerPassword = '';
var upperPassword = '';
var numPassword = '';
var specialPassword = '';

// Function for generating Password to meet requirements set by end-user. If prompt answer is yes, add a random character from that set of options to the password.

function generatePassword() {

    passwordLength = parseInt(prompt("How many characters would you like your password to contain? Please enter a number between 8 and 128."));
    // Validate that user enters valid character length.
    if (passwordLength <= 8 || passwordLength >= 128) {
        alert("Password must be a minimum of 8 characters and a maximum of 128");
        prompt("How many characters would you like your password to contain? Please enter a number between 8 and 128.")
    }
    lowerPassword = prompt("Would You like your password to include lowercase letters? Please enter 'y' or 'n'.");
    upperPassword = prompt("Would You like your password to include uppercase letters? Please enter 'y' or 'n'.");
    numPassword = prompt("Would You like your password to include number? Please enter 'y' or 'n'.");
    specialPassword = prompt("Would You like your password to include uppercase letters? Please enter 'y' or 'n'.");

    //Convert user response to lower case so it will match 'y' or 'n'.
    lowerPassword = lowerPassword.toLowerCase();
    upperPassword = upperPassword.toLowerCase();
    numPassword = numPassword.toLowerCase();
    specialPassword = specialPassword.toLowerCase();

    // Validate that at least one of the password criteria were chosen.
    if (lowerPassword === 'n' && upperPassword === 'n' && numPassword === 'n' && specialPassword === 'n') {
        alert("Password must contain one of the given criteria of lowercase, uppercase, numeric or special. Select 'Generate Password' to try again.")
    }


    var password = '';
    // Character Sets (password criteria) that end-users choose (via prompts) to include or omit from their password; lower, upper, numeric and special.
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGJKLMNPRSTUVWXYZ";
    var numeric = "0123456789";
    var specialChar = "!@#$%&*()_+-=[]|,./?><";

    console.log("hi")

    for (var i = 0; i < passwordLength; i++) {

        if (lowerPassword === 'y' && passwordLength >= 8 || passwordLength <= 128) {
            console.log(password += lowercase.charAt(Math.floor(Math.random) * lowercase.length));
        }

        if (upperPassword === 'y' && passwordLength >= 8 || passwordLength <= 128) {
            console.log(password += uppercase.charAt(Math.floor(Math.random) * uppercase.length));
        }

        if (numPassword === 'y' && passwordLength >= 8 || passwordLength <= 128) {
            console.log(password += numeric.charAt(Math.floor(Math.random) * numeric.length));
        }

        if (specialPassword === 'y' && passwordLength >= 8 || passwordLength <= 128) {
            console.log(password += specialChar.charAt(Math.floor(Math.random) * specialChar.length));
        }
    }
    return password
}

// first if statement, if yes to lowercase, add lowercase random letter to securePassword.
// Same for every other prompt.
// securePasssword might be 1 or 4 characters long depending on prompt answers
// passwordLength - securepasword.length
// */



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
