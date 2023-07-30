// declare and initialize variables and arrays
var siteTopics = ["Memes", "Jokes", "Dads", "Kids", "Puns"];
var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var firstName = "Jim";
var birthYear = 1978;
// an array method to add an additional value to the end of the siteTopics array
siteTopics.push("Funny");
// Using concatenation and the appropriate array property, display the following text to the browser’s console: “The length of the siteTopics array is 6”
console.log("The length of the siteTopics array is " + siteTopics.length);
// Display each value of the siteTopics array in the browser’s console.  Use a while loop to complete this task.
var x = 0;
while (x < siteTopics.length) {
    console.log(siteTopics[x]);
    x++;
}
// Reverse the dayNames array using the reverse method.
dayNames.reverse();
// Print out the dayNames to the console using a for loop.
for (i = 0; i < dayNames.length; i++) {
    console.log(dayNames[i]);
}
// Remove the first item in the dayNames array using an appropriate array method.
dayNames.shift();
// Create a try/catch block that includes an if condition to check if the first value of the dayNames array is equal to “Sunday”. If the condition is true,
//  throw a string to the catch block that says "Error: Sunday should be missing!"  The catch block should display any thrown messages/strings in the
//  browser's console.
try {
    if (dayNames[0] == "Sunday") {
        throw "Error: Sunday should be missing!";
    }
}
// caught error
catch (err) {
    console.log(err);
}
// Add a finally block to the try/catch that displays the following text in the browser’s console: "(Use the variable with your name) was born in the year
//  (use the variable with your birth year).  I think the day was either a (second value of the dayNames array) or (fourth value of the dayNames array)."
// **********************NOTE IT SPECIFIED THE 2ND AND 4TH VALUE, NOT INDEX POSITION*************************************
finally {
    console.log(firstName + " was born in the year " + birthYear + ". I think the day was either a " + dayNames[1] + " or " + dayNames[3] + ".");
}