// Variables ====================================
// User Inputs
var characterLength
var confirmSpecial
var confirmNumeric
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

//Functions=======================================
// When button clicked 
// Start a function to generate password

// Ask (prompt) the length 
characterLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // Check a length of at least 8 characters and no more than 128 characters
    if (!characterLength) {
        alert("You need to enter a value to start generating a password");
    } else if (characterLength < 8 || characterLength > 128) {
        characterLength = parseInt(prompt("Please choose a number between 8 and 128"));


// Confirm the following 
   } else {
    // Special characters
    confirmSpecial = confirm("Would you like your password to contain special characters?");
    // Numeric characters
    confirmNumeric = confirm("Would you like your password to contain numbers?");
    // Lowercase characters
    confirmLowercase = confirm("Would you like your password to contain lowercase characters?");    
    // Uppercase characters
    confirmUppercase = confirm("Would you like your password to contain uppercase characters?");
};
// Validate user input and ensure that at least one character type is selected
    // If 4 negative choices, Alert to choose one
    if (!confirmSpecial && !confirmNumeric && !confirmLowercase && !confirmUppercase) {
        choices = alert("You must choose at least one character type to generate the password");

    }
    
//Function to create password when user input is validated
