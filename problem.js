/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

//define the variable "password"//
//create the boolean for the password being forgotten or not//
//create the function and function name and its variables//
//state the else statements for when the password does not match using the variables from the if statements//
//*NOTE* I find difficulty in syntax and formatting, but the concepts I seem to grasp; the order of what I am supposed to do is where I get confused//

let passwordName = Bobby; 
function passwordReset (password) {
if (passwordName !== Bobby) {
    console.log ("Here is a hint")
} else {
    console.log ("Let's reset your account")
}
}
function passwordCheck (password) {
if (passwordName === Bobby) {
    console.log ("Access Granted!")
} else {
    console.log ("Access Denied!")
}
}
