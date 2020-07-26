// Assignment Code

// Assign button to generate password
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword() {

  //Initialize while loop. User must have proper password length to exit loop
  var lengthPassword;
  var password = " ";
  while ( isNaN(parseInt(lengthPassword)) || lengthPassword < 8 || lengthPassword > 124) {

  // Prompt user to enter password length
  lengthPassword = prompt('How many characters would you like your password to be? (8-124 range');
  if (isNaN(parseInt(lengthPassword))) {
   alert('Your input was not a number. Please try again.');
 } else if (lengthPassword < 8 || lengthPassword > 124) {
   alert('Password length must be between 8 and 124 characters. Please try again.');
 }

  }
  // Confirm prompts for each password "condition"
  wantsSpecial = confirm("Please click 'OK' if you wish to include SPECIAL characters.");
  wantsNumeric = confirm("Please click 'OK' if you wish to include NUMERIC characters.");
  wantsLower = confirm("Please click 'OK' if you wish to include LOWERCASE characters.");
  wantsUpper = confirm("Please click 'OK' if you wish to include UPPERCASE characters.");

  // If statement to redirect user to beginning if they confirm no characters
  if (!wantsLower && !wantsNumeric && !wantsSpecial && !wantsUpper) {
    alert('Error: No character type selected. Please try again.');
    lengthPassword = 0;
  }
  
  // Establish strings of different types of characters for password generator
  specialChar = "!~#$%^&*()_+{}|:;.";
  numericChar = "1234567890";
  lowerChar = "abcdefghijklmnopqrstuvwqxyz";
  upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Create an empty string to add specified characters by user
  specifiedChar = " ";

  // Concat strings based on user specifications from confirm prompts 
  if (wantsSpecial) {
    specifiedChar = specifiedChar.concat(specialChar);
  }
  if (wantsNumeric) {
     specifiedChar = specifiedChar.concat(numericChar);
  }
  if (wantsLower) {
     specifiedChar = specifiedChar.concat(lowerChar);
  }
  if (wantsUpper) {
    specifiedChar = specifiedChar.concat(upperChar);
  }

  // For loop that iterates through empty string and inserts random characters based on password length
  for (var i = 0; i < lengthPassword; i++) {

    // Randomly select an index
    let randomIndex = Math.floor(Math.random() * specifiedChar.length);

    // Add character at that random index of specified characters into password.
    password += specifiedChar[randomIndex];

  } return password;
}
