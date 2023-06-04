var funnyString = "The bears are in the same location as the giraffes.";
// indexOf method
var position = funnyString.indexOf("the g");

console.log(position);
// lastIndexOf method
var position = funnyString.lastIndexOf("the");

console.log(position);

var seriousString = "If a giraffe has a sore throat, where does it start and end?";
// indexOf method 3rd a
var position2 = seriousString.indexOf("a", 9);

console.log(position2);

var fruits = "Apples, Bananas, Strawberries, bananas, Grapes, Oranges";
// replace method using insensitive format
var newFruits = fruits.replace(/strawberries/i, "Pear");

console.log(newFruits);
// slice method isolate orange
var newFruits2 = fruits.slice(-7, -1);

console.log(newFruits2);
//  concat two strings
var firstSentence = "Hello my name is ";

var myName = "Jim Allen";

let result = firstSentence.concat(myName);

console.log(result);

