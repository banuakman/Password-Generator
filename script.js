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
numeric= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // Lowercase characters
lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Uppercase characters
var toUpper = function (letters) {
        return letters.toUpperCase();
    };
uppercaseLetters = lowercaseLetters.map(toUpper);
    // A set created  from the choosen variables
var newSet;

//Functions=======================================
// When button clicked run function
var button = document.querySelector("#generate");
button.addEventListener("click", generatePassword);

// Start a function to generate password
function generatePassword() {
 
    // Ask (prompt) the length 
    characterLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
        // Check a length of at least 8 characters and no more than 128 characters
        if (!characterLength) {
            alert("You need to enter a value to start generating a password");
        } else if (characterLength < 8 || characterLength > 128) {
            alert("Please choose a password length between 8 and 128");
            // characterLength = parseInt(prompt("Please choose a number between 8 and 128"));

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
        newSet = alert("You must choose at least one character type to generate the password");
    }

        // If 4 positive choices - create a new set
    else if (confirmSpecial && confirmNumeric && confirmLowercase && confirmUppercase) {
        newSet = special.concat(numeric, lowercaseLetters, uppercaseLetters);
    }
        // If 3 positive choices - create a new set
    else if (confirmSpecial && confirmNumeric && confirmUppercase) {
        newSet = special.concat(number, uppercaseLetters);
    }
    else if (confirmSpecial && confirmNumeric && confirmLowercase) {
        newSet = special.concat(number, lowercaseLetters);
    }
    else if (confirmSpecial && confirmNumeric && confirmUppercase) {
        newSet = special.concat(alpha, uppercaseLetters);
    }
    else if (confirmNumeric && confirmLowercase && confirmUppercase) {
        newSet = numeric.concat(alpha, uppercaseLetters);
    }
    // If 2 positive choices - create a new set
    else if (confirmSpecial && confirmNumeric) {
        newSet = special.concat(numeric);
    }
    else if (confirmSpecial && confirmLowercase) {
        newSet = special.concat(lowercaseLetters);
    }
    else if (confirmSpecial && confirmUppercase) {
        newSet = special.concat(uppercaseLetters);
    }
    else if (confirmNumeric && confirmLowercase) {
        newSet = numeric.concat(lowercaseLetters);
    }
    else if (confirmNumeric && confirmUppercase) {
        newSet = numeric.concat(numeric, uppercaseLetters);
    }
    else if (confirmLowercase && confirmUppercase) {
        newSet = lowercaseLetters.concat(uppercaseLetters);
    }
    // If 1 positive choices - create a new set

    
    //Function to create password

    // random selection from newSet

}

