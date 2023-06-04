var str1 = "10";
var str2 = "3";
var num1 = 10;
var num2 = 3;
var num3 = 2;
var num4 = 8.2567;

var strSum = str1 + str2;
console.log(strSum);
// outputs 103

var minus = num1 - num3;
console.log(minus);
// outputs 8

var times = num1 * num2;
console.log(times);
// outputs 30

var divided = num1 / num3;
console.log(divided);
// outputs 5

var remainder = num1 % num2;
console.log(remainder);
// outputs 1

var minus2 = num2 - num4;
console.log(minus2);
// outputs -5.2567

var inc = num1++
console.log(inc);
// outputs 10 but stores 11

var dec = num1--;
console.log(dec);
// outputs 11 but stores 10

var sh = num1 -= 4
console.log(sh);
// outputs 6

console.log(num2);
// outputs 3

var preInc = ++num2;
console.log(num2);
// outputs 4 stores 4

var num2 = 3;
var posInc = num2++;
console.log(num2);
// outputs 4 stores 4?

var num2 = 3;
console.log(num2);
// outputs 3
var preInc = ++num2;
console.log(num2);
// outputs 4 stores 4
console.log(num2--);
// outputs 4 stores 3

// if incrementing in console it outputs the current and stores the new when using post increment
// with pre increment and decrement is outputs the same as is stores

console.log(str1 + num1);
// outputs 106 cause we previously decremented num1 by 4 concats them both as strings
console.log(str1 - str2);
// output 7 as it converted the strings to int's
var str1 = "10";
var strSum = str1 - str2;
console.log(strSum);
// still outputs 7
var strSum2 = "the total is: " + str1 - str2 + ".";
console.log(strSum2);
// outputs NaN