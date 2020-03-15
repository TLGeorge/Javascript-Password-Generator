// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function for generating Password to meet requirements set by end-user. If prompt answer is yes, add a random character from that set of options to the password.
function generatePassword() {
    var securePassword = "";
    var passwordSet = "";

    var passwordLength = "";
    var passwordValue = "";

    inputLength = parseInt(prompt("How many characters would you like your password to contain? Please enter a number between 8 and 128."));
    lowerPassword = prompt("Would You like your password to include lowercase letters? Please enter 'y' or 'n'.");
    upperPassword = prompt("Would You like your password to include uppercase letters? Please enter 'y' or 'n'.");
    numPassword = prompt("Would You like your password to include number? Please enter 'y' or 'n'.");
    specialPassword = prompt("Would You like your password to include uppercase letters? Please enter 'y' or 'n'.");

    //Convert user response to lower case so it will match 'y' or 'n'.
    lowerPassword = lowerPassword.toLowerCase();
    upperPassword = upperPassword.toLowerCase();
    numPassword = numPassword.toLowerCase();
    specialPassword = specialPassword.toLowerCase();

    // Character Sets (password criteria) that end-users choose (via prompts) to include or omit from their password; lower, upper, numeric and special.
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGJKLMNPRSTUVWXYZ";
    var numeric = "0123456789";
    var specialChar = "!@#$%&*()_+-=[]|,./?><";

    // Takes value that user has input for desired length of password and starts to generate 
    if (inputLength >= 8 && inputLength <= 128) {
        passwordValue = inputLength;
    } else {
        // Validate that user enters valid character length.
        return ("Password must be a minimum of 8 characters and a maximum of 128!")
    }

    // If prompt answer is yes, add a random character from that set of options to the password.
    if (upperPassword === "y") {
        passwordSet += uppercase;
    }

    if (lowerPassword === "y") {
        passwordSet += lowercase;
    }

    if (numPassword === "y") {
        passwordSet += numeric;
    }

    if (specialPassword === "y") {
        passwordSet += specialChar;
    }

    // Validate that at least one of the password criteria were chosen.
    else if (lowerPassword === 'n' && upperPassword === 'n' && numPassword === 'n' && specialPassword === 'n') {
        alert("Password must contain one of the given criteria of lowercase, uppercase, numeric or special. Select 'Generate Password' to try again.");
    }
    // Adjusts length of password from user's criteria to length that they desire (via first prompt).
    passwordLength = passwordValue;

    for (let i = 0; i < passwordLength; i++) {
        securePassword += passwordSet.charAt(
            Math.floor(Math.random() * passwordSet.length));
    }
    return securePassword;
}



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
