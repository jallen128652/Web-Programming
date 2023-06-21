// declare variables
var num1;
var num2;
// get user input
num1 = window.prompt("Please enter a number between 1 and 5, then press OK.");
// convert string to int
parseInt(num1);
// test value not within range or NaN using while loop
while (num1 < 1 || num1 > 5 || isNaN(num1) === true) {
    // value not in range is true, request new input
    num1 = window.prompt("Please enter a number between 1 and 5, the value entered " + num1 + " is out of range or not a number.");
}
// value in range 
console.log("You chose " + num1);
// repeat steps for num1 on num2
num2 = window.prompt("Please enter a number between 6 and 10, then press OK.");
parseInt(num2);
while (num2 < 6 || num2 > 10 || isNaN(num2) === true) {
    num2 = window.prompt("Please enter a number between 1 and 5, the value entered " + num1 + " is out of range or not a number.");
}
console.log("You chose " + num2);
// multiply values
var num3 = num1 * num2;
console.log("Your numbers multiplied together are equal: " + num3);
// determine if num3 is odd or even
if (num3 % 2 === 0) {
    console.log("Your numbers multiplied together are even.");
} else {
    console.log("Your numbers multiplied together are odd.");
}