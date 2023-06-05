// standard for loop output is 0-9
for(var i = 0; i < 10; i++) {
	console.log(i);
}

// standard while loop 
var j = 0; //variable initialize 
while(j < 10) { //entry condition expression
    console.log(j); // action 
    j++; // increment loop update 
}
// output 0-9

// standard do while loop
// will run at least once regardless of entry or exit condition

var k = 567;
var reps = 0;

do {
    ++reps; //counter
    console.log(reps + " reps gives us " + k);
    k*=2.1; //loop control update statement
} while ( k<567 ); //exit condition

// output "1 reps gives us 567"

// control structure with a do while loop checking entry condition
var l = 567;
var reps = 0;

if ( l <= 567 ) {
do {
    ++reps; //counter, note it's pre increment
    console.log(reps + " reps gives us " + l);
    l*=2.1; //loop control update statement
} while ( l<567 ); 
} else {
    console.log("l is bigger than 567.");
}

// example while loop
var m = 1;
while(m < 11 ) {
    console.log("This ran " + m + " times");
    m++; //necessary to prevent an infinite loop
}
console.log("This prints after the while loop ends");
console.log("The value of m is now " + m); 
//note it still incremented to 11 prior to exit and stored the value in the variable
