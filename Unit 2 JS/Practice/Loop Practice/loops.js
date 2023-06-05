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

// example do while loop
// executes the body at least once and that happens before checking the loop condition
var n = 1; // loop control variable
do {
    console.log("This ran " + n + " times.");  
    n++; // loop control update
} while(n < 10); //use semicolon after the while in a do while loop
console.log("This prints after the do while loop ends");
console.log("The value of n is now " + n); //note the value still incremented to 10

// example for loop

for(var o = 1; o <= 10; o++){ //( initialize variable value; check, increment)
    console.log("This ran " + o + " times.");  
}
console.log("This prints after the for loop ends");
console.log("The value of o is now " + o); //note the value still incremented to 11

// can initialize variable outside of the for loop
var p = 0;
for(; p <= 10; p++){ 
console.log("This ran " + p + " times.");
}
console.log("This prints after the for loop ends");
console.log("The value of p is now " + p);

// nested for loop
var count = 0;
var counts = 0;
for(var q = 1; q <= 10; q++){ 
    console.log("This q ran " + q + " times."); 
    counts++
     for(var r = 1; r <= 10; r++){ 
        console.log("This r ran " + r + " times.");
        count++
     }
}
var sum = (count + counts);
console.log("This prints after the for loop ends");
console.log("The value of q is now " + q);
console.log("The value of r is now " + r); // note that r resets each q loop
console.log("The total runs is " + sum);
// used count, counts, sum and these prints to analyze the function of the nested loop

// breaks
// need a way to stop the loop like a sentinel value in while loops
for(var s = 0; s < 10; s++){ 
    console.log("Hello World " + s);
    if(s === 6){
        console.log("We hit the if value");
        break;
    }
}
console.log("This prints after the for loop ends");
console.log("The value of s is now " + s);
// check console log to see the final values

// continue
for(var t = 0; t < 10; t++){ 
    console.log("Hello World " + t);
    if(t === 6){
        console.log("We hit the if value");
        continue; //note it now completes the loop unlike break
    }
    console.log("are we there yet??") //still inside the loop structure
}
console.log("This prints after the for loop ends");
console.log("The value of t is now " + t);

// probably can use the break and continue together with an if and else control structure