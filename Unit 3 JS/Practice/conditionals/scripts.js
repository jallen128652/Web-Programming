var a = 5;
var b = "4";
var theNumbersMatch;
// == is basic equality, === is strict equality including data type 
// <=, >=, <, >, !=, !== more equality operators
if(a !== b) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log("The numbers match: " + theNumbersMatch);

var a = true;
var theNumbersMatch;
if(a!=true){
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}
console.log("The numbers match: " + theNumbersMatch);

var a = true;
var theNumbersMatch;
if(!a){
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
if(a==b && c==d){
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
if(a==b || c==d){
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
if((a==b || c==d) && ((a==b) != (c==d))){
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}
console.log("The numbers match: " + theNumbersMatch);

// ternary operator (shorthand if else statements)

// long hand version
var a = 5;
var b = 6;

if(a == b) {
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