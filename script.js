var generateEl = document.querySelector("#generate");
var copyEl = document.querySelector("#copy");
var display = document.querySelector("#password");
var numChar;
var typeChar;

var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numeric = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var possibleChars = "";
var password = "";


// create password using length and characters defined by user input
// alerts user if user input for character type or number of characters is invalid
function generatePassword(num, type) {
    if (validateInput(num, type) && (num >= 8 && num <= 128)) {
        var index;
        for (i = 0; i < num; i++) {
            //set index to random int between 0 and length of possible values - 1
            index = Math.floor(Math.random() * Math.floor(possibleChars.length - 1));
            password += possibleChars[index];
            console.log(index);
        }
        display.textContent = password;
        console.log(password);
    } else {
        alert("Invalid Input");
    }
}

// verify user input included at least one valid character type
// compile string of possible character values for each character type selected
function validateInput(num, type) {
    var isValid = false;
    if (type.indexOf("special") != -1) {
        possibleChars += special;
        isValid = true;
    }
    if (type.indexOf("numeric") != -1) {
        possibleChars += numeric;
        isValid = true;
    }
    if (type.indexOf("lowercase") != -1) {
        possibleChars += lowercase;
        isValid = true;
    }
    if (type.indexOf("uppercase") != -1) {
        possibleChars += uppercase;
        isValid = true;
    }
    console.log(possibleChars);
    return isValid;
}

// button initiates prompt
// prompt how many characters between 8 and 28
// prompt what kind of characters (special, numeric, lowercase, uppercase)
generateEl.addEventListener("click", function(e) {
    e.preventDefault();
    numChar = prompt("How many characters? Enter number between 8 and 128");
    typeChar = prompt("What kind of characters? Special, numeric, lowercase, uppercase");
    generatePassword(numChar,typeChar.toLowerCase());
})

// button copies password textarea content to clipboard
copyEl.addEventListener("click", function(e) {
    display.select();
    document.execCommand("copy");
})
