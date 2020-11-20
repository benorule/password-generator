# password-generator

Link to deployed application: https://benorule.github.io/password-generator/

Screenshot of deployed application:

![Index file screenshot](/assets/password-generator-screenshot.png?raw=true "Application Screenshot")

## Table of Contents: 
 * [Description](#Description) 
* [Installation Instructions](#Installation-Instructions) 
* [Usage Information](#Usage-Information) 
* [Contribution Guidlines](#Contribution-Guidelines) 
* [Test Instructions](#Test-Instructions) 
* [Questions](#Questions) 
## Description 
Password generator that allows user to choose certain criteria for the password to have.
## Installation Instructions 
This project is hosted by GitHub pages. Alternatively, you can download the app from GitHub through the command git clone or by downloading the zip file.
## Usage Information 
Click the generate button and answer the questions presented in the alert boxes.
## Contribution Guidelines 
To contribute to this project please submit a pull request on GitHub with a clear description of your contribution.
## Test Instructions 
Click the generate button with the chrome dev tools console open.
## Questions 
 * GitHub: https://github.com/benorule
* Email: benorule@outlook.com
* License: MIT

# Some information about the development process:

The html file and css file were provided to me by the Coding Bootcamp and were not edited with the exception of the links to the css and javascript file within the html file which were changed to include the assets folder.

The javascript file was also provided to me by the Coding Bootcamp, the unedited version being in the first commit to GitHub. This is the file in which most of the work was done.

## function generatePassword

The function writePassword was already included in the code which displays the returned value from generatePassword on the html document.

The generatePassword consists of three sections: 
	1. Recieving input regarding the length of the password. 
	2. Recieving input regarding the characters to be used in the password.
	3. Generating a random password using these criteria.

### var passwordLength

The aim of this section of the code was to recieve a number between 8 and 128 and store that number as an integer in a variable to be later used as the length of the randomly generated password.

I used an if statement with the condition that if the input is less than 8 or greater than 128 then an alert will display saying "invalid input" otherwise it would continue to the next section of the code.

I placed this if statement within a while loop to ensure that if an invalid input was entered the program would prompt the user again until a valid input was entered. I created a boolean variable repeatOne that would be changed to true when a valid input was entered, ending the while loop that continues based on the condition that repeatOne is false.

After the while loop I used the console.log function that would allow me to check that the code worked as expected.

Later I added the parseInt function so that the number would be stored as an integer inside the variable so it would work when used as a length for the password.

When testing the program I realised that pressing OK after giving no input did not make the alert "invalid input" come up as expected so I added (lengthPassword == "") as a condition in the if statement but it still didn't work as expected.

I realised the ("") condition was not working as it had already been converted into an integer and this empty input was a string. Originally I had added the parseInt before the if statement but moving it to run after the if statement solved the problem relating to empty input.

### var passwordChar

The aim of this section of the code was to recieve a selection of types of characters that would be stored as a string in a variable to be later used as the character set of the randomly generated password.

I created an arrary called charSelect listing the character types that would be referred to in the prompts to the user asking them whether to include a specific character type in the character set.

I stored the selections from the answers in individual variables as boolean data.

I created an empty variable called passwordChar to which the selected character types would be added to later on.

I created an if statement that would check each boolean variable to see whether it was true or not and add the characters to the character set if it was true and move on to the next if else statement if it was false.

I used a similar while loop to the one in the var passwordLength section to ensure it asked for each variable and made it so when a character set was added to passwordChar it would change the boolean to false so it would be skipped in the next iteration of the while loop.

### var passwordMade

The aim of this section of code was to randomly generate a password based on the criteria stored in variables and store the generated password in a variable.

I created an empty variable, passwordMade, for the password to be added to once generated similarly to passwordChar.

I wrote a for loop that would add a character to passwordMade so long as i was less than passwordLength and would terminate when the length of passwordMade had reached this number.

I used the javascript functions Math.floor and Math.random to randomly generate a value within the variable passwordChar.

This value of passwordMade was then returned in the generatePassword function and when this function was called inside of the writePassword function the variable password took on the value of passwordMade before being displayed on the html page.

