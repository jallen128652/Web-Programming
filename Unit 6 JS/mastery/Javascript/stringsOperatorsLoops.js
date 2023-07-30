// string var declare and initialize
var str1 = "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
var str2 = "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
var str3 = "This summer they plan on traveling to El Paso to visit as many family members as possible.";

// isolating the number string characters
var num1 = str1.slice(10, 11);
var num2 = str1.slice(52, 53);
var num3 = str1.slice(-7, -6);
var num4 = str2.slice(15, 16);
var num5 = str2.slice(63, 64);
var num6 = str2.slice(-22, -19);
var num7 = str2.slice(-22, -20);
var num8 = str2.slice(-20, -19);

// parsing the characters to integers
var nums1 = parseInt(num1);
var nums2 = parseInt(num2);
var nums3 = parseInt(num3);
var nums4 = parseInt(num4);
var nums5 = parseInt(num5);
var nums6 = parseInt(num6);
var nums7 = parseInt(num7);
var nums8 = parseInt(num8);

// using operators to add the variables into a total
var sumTotal = (nums1 + nums2 + nums3 + nums4 + nums5 + nums7);

// concatenate and display 
console.log("The variable sumTotal is storing " + sumTotal);
// note using the concat() didn't seem to work with mixed data types for me.

// extract San Antonio from str2
var sa = str2.slice(41, 52);

// replace city in str3
var str4 = str3.replace("El Paso", sa);
console.log(str4);

// use a loop and the numeric variables nums3 and nums7 to display 10 strings

while(nums3 <= nums7) {
    console.log("I saw " + nums3 + " car(s) on my trip.")
    nums3++
}

