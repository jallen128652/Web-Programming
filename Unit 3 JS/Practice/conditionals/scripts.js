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

// --------------------------------practice---------------------------
//1. Create a variable called name and assign your name to it. Write an if condition to determine if the name variable is the same as your name written as a string "Your name". (comparsion operator) If it is true the body should write out: "The name is the same."
//Write code below:
var name1 = "Jim";
if (name1 === "Jim") {
    console.log("The name is the same.");
}

//2. Duplicate your code above and change the first character of your name to a lower case and check the console for the result.
//Write code below:
var name1 = "Jim";
if (name1 === "jim") {
    console.log("The name is the same.");
}

//3. If you did the code above correctly, the console didn't print anything to it. Now duplicate the code again and this time add an else statement. The body for the else should print to the console: "The name was not the same."
//Write code below:
var name1 = "Jim";
if (name1 === "jim") {
    console.log("The name is the same.");
} else {
    console.log("The name was not the same.");
}

//4. Duplicate the code and try using the !== comparison symbol. Watch the console for the output. Think about the routing and why it does what it does.
//Write code below:
var name1 = "Jim";
if (name1 !== "jim") {
    console.log("The name is the same.");
} else {
    console.log("The name was not the same.");
}

//5. Uncomment the variables below. Write a conditional statement to check if num1 is larger then num2. If it is larger, the answer variable should contain the value when you take num1 minus num2. Print out the answer to the console using the sentence: "The answer is: " + answer
//Write code below:
var num1 = 10;
var num2 = 3;
var answer;

if (num1 > num2) {
    answer = num1 - num2;
    console.log("The answer is: " + answer);
}

//6. Duplicate the code above, change the value of num1 equals 6 and num2 equals 4. Add an else-if condition to see if num1 is less then num2. Configure the math to present the answer the same for either if conditions. Swap the values for num1 and num2 to check your answers.
//Write code below:
var num1 = 4;
var num2 = 6;
var answer;

if (num1 > num2) {
    answer = num1 - num2;
    console.log("The answer is: " + answer);
} else if (num1 < num2) {
    answer = num2 - num1;
    console.log("The answer is: " + answer);
}
//7. Duplicate the code above, add an else to your code. The else should assign the answer variable with string that says: "neither". Alter the code to only allow the else to run. You can do this several different ways, so don't be afraid to modify anything.
//Write code below:
var num1 = 6;
var num2 = 6;
var answer;

if (num1 > num2) {
    answer = num1 - num2;
    console.log("The answer is: " + answer);
} else if (num1 < num2) {
    answer = num2 - num1;
    console.log("The answer is: " + answer);
} else {
    console.log("neither");
}
//8. Uncomment the variables below. Write an if condition that check num1 is greater than num2 AND that name is the same as the code variable. If it is true, the block code for the if should print out the following sentence: "Num1 is greater than Num2 and Name and Code are the same"
//Write code below:
var num1 = 10;
var num2 = 3;
var name1 = "code block";
var code = "code block";
if (num1 > num2 && name1 === code) {
    console.log("Num1 is greater than Num2 and Name and Code are the same");
}


//9. Uncomment the code. Without changing the variables, alter the if condition to make the statement true.

var num1 = 10;
var num2 = 3;
var name1 = "code block";
var code = "what code?";

if (num1 >= num2 & name1 !== code) {
    console.log("Num1 is greater than Num2 and Name and Code are the same");
}

//10. You need to watch your curly braces with nested ifs. Uncomment the varables below. Write a if statement to check that the name variable is not the same as the code variable. The if body should contain another if condition to check if num1 is greater than num2. Print out the following sentence in the nest if body: "This is called an nested if"
var num1 = 10;
var num2 = 3;
var name1 = "code block";
var code = "what code?";
if (name1 !== code) {
    if (num1 > num2) {
        console.log("This is called an nested if");
    }
}

//11. Finally Rewrite the following code to replace the statement below with a ternary operator structure. You might want to copy the original code before altering just in case.

var value1 = "world";
var value2 = "hello";
//
//if(value1 === value2){
//    console.log("Print " + value1 + " " + value2);
//} else{
//    console.log("Print " + value2 + " " + value1);
//}
value1 === value2 ? console.log("Print " + value1 + " " + value2) : console.log("Print " + value2 + " " + value1);

