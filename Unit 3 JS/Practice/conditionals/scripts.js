var a = 5;
var b = "4";
var theNumbersMatch;
// == is basic equality, === is strict equality including data type 
// <=, >=, <, >, !=, !== more equality operators
if (a !== b) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log("The numbers match: " + theNumbersMatch);

var a = true;
var theNumbersMatch;
if (a != true) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}
console.log("The numbers match: " + theNumbersMatch);

var a = true;
var theNumbersMatch;
if (!a) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}
console.log("The numbers match: " + theNumbersMatch);


// and/or logical operators: && || 
// and means both expressions must be true or it's false
// or means if one expressions is true, they both are
// can be used with any equality operator
var a = 5;
var b = 6;
var c = 6;
var d = 6;
var theNumbersMatch;
if (a == b && c == d) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}
console.log("The numbers match: " + theNumbersMatch);

var a = 5;
var b = 6;
var c = 6;
var d = 6;
var theNumbersMatch;
if (a == b || c == d) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}
console.log("The numbers match: " + theNumbersMatch);

// nested conditional statments

var a = 5;
var b = 6;
var c = 6;
var d = 6;
var theNumbersMatch;
// if a == b XOR c equals d, but not both
if ((a == b || c == d) && ((a == b) != (c == d))) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}
console.log("The numbers match: " + theNumbersMatch);

// ternary operator (shorthand if else statements)

// long hand version
var a = 5;
var b = 6;

if (a == b) {
    console.log("Match");
} else {
    console.log("No match");
}

// shorthand version
var a = 6;
var b = 6;
// condition ? true : false
a == b ? console.log("Match") : console.log("No match");
// operator presendence && evaulated before ||
// can use parenthesis to override
// not operator on the outside of parenthesis changes each operator inside the parenthesis
// example:
var l1 = "monkey";
var l2 = "bear";
var l3 = "tiger";
// these are the same expressions, note it changed the && to ||
console.log(!(l1 === "monkey" && l2 === "bear"));
console.log(l1 !== "monkey" || l2 !== "bear");
// ----------------control structures
// window.confirm causes a popup with OK or Cancel
// var answer = window.confirm("Click ok, get true. Click cancel, get false.");
// a true or false variable is stored in the variable answer
// if (answer === true) {
//     console.log("You hit OK")
// } else {
//     console.log("You hit Cancel")
// }
// window.prompt provides a text field for input
// var answer2 = window.prompt("type yes, no or maybe");

// if (answer2 == "yes") {
//     console.log("You said yes");
// } else if (answer2 == "no") {
//     console.log("You said no");
// } else if (answer2 == "maybe") {
//     console.log("You said maybe");
// } else {
//     console.log("Invalid Input");
// }

// ---------------advanced if

var x = 5;
var y = 6;
var nameY = "Jim";
var nameX = "Jim";
// whichever line of code is true first
if (x > y) {
    console.log("Hello, world!");
} else if (nameY !== nameX) {
    console.log("yada")
} else {
    console.log("Goodby, world!")
}

// -------------------------nested if and else
var x = 5;
var y = 6;
var nameY = "Jim";
var nameX = "John";
// note to get to the nested if, the first condition must be true
// if(x < y) {
//     console.log("first condition")
//     if(nameY !== nameX){
//         console.log("Nested condition")
//     }
// }
// an if can be the action 
// if(x < y) {   
//     console.log("first condition") 
//     if(nameY !== nameX){
//         console.log("Nested condition")
//     }
// }
// can work this to multiple forks or decisions
if (x < y) {
    console.log("first condition");
    if (nameY !== nameX) {
        console.log("Nested condition");
    } else {
        console.log("first nested else");
    }
} else {
    console.log("first condition else");
}

// ----------------terse if var = expression ? if true : if false;
var cherub = "no";
// note it works without {}, but only the first line after is bound by the if statement
// better to use the {}
if (cherub === "cupid") console.log("Ouch, an arrow! Ooo, I'm in love!");
else console.log("I feel nothing!");
// if with variable only
var wantForChristmas = "puppy", gotForChristmas = "puppy", cryAboutIt = false;
if (wantForChristmas === gotForChristmas) {
    console.log("Yay, The little children are so pleased!");
    cryAboutIt = false;
} else {
    console.log("Oh no! Sad Christmas!");
    cryAboutIt = true;
}
// solitary ifs in new code block
if (cryAboutIt) {
    console.log("Child says: WAAAAAAAAAAAAAAAAAAAAAAA!");
}
if (!cryAboutIt) {
    console.log("Child says: YAAAAAAAAAAAAAYYYY!");
}
// ternary operator aka shorthand
var animal = "cat";
// animal = "dog"; //uncomment to see how this works. 
// shorthand if statement
// expression ? if true : if false
animal === "cat" ? console.log("You will be a cat herder") : console.log("You will be a dog herder");
// additional shorthand single line with variable
var job = animal === "cat" ? "cat herder" : "dog catcher";
