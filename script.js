// Assignment Code
var generateBtn = document.querySelector("#generate");

var newPassword =

    // Function for returning Password to end-user
    function generatePassword() {
        return 'password that was generated'
    }




// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
