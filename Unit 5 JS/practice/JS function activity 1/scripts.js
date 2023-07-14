// declare vars
var firstName = "Jon";
var lastName = "Doe";
var dob = 1992;
var address = "1998 harddays dr.\nDallas, TX. 79999";
// functions
// Create a function to print out your first name and last name together with a space in between to the console
function nameFx(name1, name2) {
    console.log(name1, name2);
}
nameFx(firstName, lastName);
// Create a function that accepts your dob as an argument. The function should subtract the dob from the current year, and return the age
function yearsOld(birthYear) {
    const d = new Date();
    var currentYear = d.getFullYear();
    var age = currentYear - birthYear;
    return age;
}
var ageOld = yearsOld(dob);
console.log(ageOld);
// Create a function that accepts the first and last name, and address
// print out the following string to the console. "My name is (first name last name), I am (age) years young and I live at (address)."
function nameAddressAge(fn, ln, age, addy) {
    console.log("My name is " + fn + " " + ln + "\n" + "I am " + age + " years young\nI live at address:\n" + addy);
}
nameAddressAge(firstName, lastName, ageOld, address);
// done