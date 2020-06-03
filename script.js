var generateEl = document.querySelector("#generate");
var copyEl = document.querySelector("#copy");
var display = document.querySelector("#password");
var quantityChar = document.querySelector("#quantity");
var specialChar = document.querySelector("#special");
var lowercaseChar = document.querySelector("#lowercase");
var uppercaseChar = document.querySelector("#uppercase");
var numberChar = document.querySelector("#number");

var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numeric = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var possibleChars = "";
var password = "";


// create password using length and characters defined by user input
function generatePassword() {
    var num = quantityChar.value;
    var index;
    for (i = 0; i < num; i++) {
        //set index to random int between 0 and length of possible values - 1
        index = Math.floor(Math.random() * Math.floor(possibleChars.length - 1));
        password += possibleChars[index];
    }
    display.textContent = password;
}

// compile string of possible character values for each character type selected
function getChars() {
    if (specialChar.checked) {
        possibleChars += special;
    }
    if (lowercaseChar.checked) {
        possibleChars += lowercase;
    }
    if (uppercaseChar.checked) {
        possibleChars += uppercase;
    }
    if (numberChar.checked) {
        possibleChars += numeric;
    }
    generatePassword();
}

// generate password
generateEl.addEventListener("click", function(e) {
    e.preventDefault();
    getChars();
    password = "";
    possibleChars = "";
})

// button copies password textarea content to clipboard
copyEl.addEventListener("click", function(e) {
    display.select();
    document.execCommand("copy");
})
