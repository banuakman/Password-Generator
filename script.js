// Variables ====================================
// User Inputs
var characterLength
var confirmSpecial
var confirmNumber
var confirmUppercase
var confirmLowercase

// Password variable values
    // Special characters
special = ["!", "#", "$", "%", "&", "/", "(", ")", "=", "*", "?", "@", "+", ">", "<"];
    // Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // Lowercase characters
lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Uppercase characters
var toUpper = function (letters) {
        return letters.toUpperCase();
    };
uppercaseLetters = lowercaseLetters.map(toUpper);

console.log (uppercaseLetters)

//Functions=======================================
// When button clicked 
// Start a function to generate password

// Ask (prompt) the length 
    // Check a length of at least 8 characters and no more than 128 characters

// Confirm the following 
    // Special characters
    // Numeric characters
    // Lowercase characters
    // Uppercase characters

// Validate user input and ensure that at least one character type is selected
    // If 4 negative choices selected Alert to choose one

//Function to create password when user input is validated
