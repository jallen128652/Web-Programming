// The try statement defines a code block to run (to try).

// The catch statement defines a code block to handle any error.

// The finally statement defines a code block to run regardless of the result.

// The throw statement defines a custom error.

// ----------------details--------------------

// The try statement allows you to define a block of code to be tested for errors while it is being executed.

// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

// The JavaScript statements try and catch come in pairs

// The throw statement allows you to create a custom error.

// Technically you can throw an exception (throw an error).

// The exception can be a JavaScript String, a Number, a Boolean or an Object

// The finally statement lets you execute code, after try and catch, regardless of the result

// -----------------try catch------------------
var num1 = 1;
try{
    num1.toPrecision(500);
}
catch(RangeError){
    console.log(RangeError.message);
}

try{
    aldert("welcome guest");
}
catch(err){
    console.log("try catch on line 10 did not execute");
}

// --------------throw--------------
var num2 = 2;
try{
    if (num2 > 50){
        throw "number is too large! Please enter a smaller number.";
    }else if(num2 == 2) {
        throw "number was spot on";
    }else {
        num2 = 34;
    }
} 
catch(messageThrown) {
    console.log("The " + messageThrown);
}
// always executes
finally{
    console.log("The finally block ran " + num2);
}
