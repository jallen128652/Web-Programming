// // format for a fx

// // -------------------regular fx-------------------

// var a = 5;
// var b = 4;
// function fxName (a,b) {
//     var result = a * b;
//     console.log(result);
//     return result;
// }
// // call the fx and pass vars as args
// fxName(a, b);

// // ------------------anonymous fx----------------------

// // invoked by calling variable as a fx
// var divided = function(){
//     var result0 = 3/4;
//     console.log("3 divided by 4 is", result0);
// }
// // call the variable
// divided();

// // ------------------immediately invoked function expression--------------

// // runs as soon as the the browser finds it
// (function() {
//     var result1 = 12 / 0.75;
//     console.log("12 divided by 0.75 is", result1 + (","), "spacing on concat is not required when using a comma for args.");
// }())

// // ---------------------------basic fx's--------------------------------------

// // individual lines
// console.log('Arf');
// console.log('Woof');
// console.log('Meow');
// console.log('Moooooooooo');
// // regular fx
// function speak(){
//     console.log('Arf');
//     console.log('Woof');
//     console.log('Meow');
//     console.log('Moooooooooo');
// }
// // call the fx can call from console also
// speak();

// -------------------------build a basic fx---------------------------------------

// // 1. define fx 
// function findBiggestFraction(){
//     // expression ? if : else
//     a>b ? console.log("a: ", a) : console.log("b: ", b);
// }
// // 2. define vars
// var a = 3/4;
// var b = 5/7;
// // call fx
// findBiggestFraction();

// ----------------------pass args to the fx-----------------------

//  // 1. define fx 
// function findBiggestFraction(a, b){
//     // expression ? if : else
//     a>b ? console.log("a: ", a) : console.log("b: ", b);
// }
// // declare vars
// var firstFraction = 3/4;
// var secondFraction = 5/7;
// // call fx, pass args in. Note firstFraction becomes a in the fx and secondFraction becomes b
// findBiggestFraction(firstFraction, secondFraction);
// // fx is reusable so you can pass in any args
// findBiggestFraction(8/31, 9/36);

// ------------------------return values from a fx---------------------
// function findBiggestFraction(a, b) {
//     var result;
//     a > b ? result = ["firstFraction ", a] : result = ["secondFraction ", b];
//     return result;
// }
// var firstFraction = 3 / 4;
// var secondFraction = 5 / 7;
// // call and print
// console.log(findBiggestFraction(firstFraction, secondFraction));
// // create and print var which calls fx and stores the return value
// var fractionResult = findBiggestFraction(firstFraction, secondFraction);
// console.log(fractionResult);
// // can access the individual array results
// console.log("First fraction result is:", firstFraction);
// console.log("Second fraction result is:", secondFraction);
// console.log("Fraction " + fractionResult[0] + "with a value of " + fractionResult[1] + " is the biggest.");

// ------------------------fx setup and calls fx call in a fx----------------------------------------------------

// declare and initialize vars in same order as they'll be passed into the fx
var num1 = 3;
var num2 = 5;
// call and store
var caughtVar = nameFunction(num1, num2);
// 2. args


if (caughtVar == "") {
    console.log("The value was less than 10, so the value never changed")
} else {
    console.log(caughtVar);
}
// 1. fx name(params, params){}
function nameFunction(number1, number2) {
    // no need to declare number1 and number2 locally in the fx
    var sum = number1 * number2;
    var catchVar = anotherFunction(sum);

    // return value needs to be the last line in the codeblock of the fx, the fx is done after the return value
    return catchVar;
}
// function to be called from inside a fx
function anotherFunction(sumVal) {
    var value = "";
    if (sumVal > 10) {
        value = "The value is greater than 10";

    } else {
        value = "The value is less than 10";

    }
    return value;
}


