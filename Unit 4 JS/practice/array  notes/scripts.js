var pens;
var pens2;
// shorthand array
pens = ["red", "blue", "green", "orange"];
console.log(pens);

// longhand array
pens2 = new Array("red", "blue", "green", "orange");
console.log(pens2);
// each value in an array can be a different data type
var mixed = ["one", 2, false, "This is true", 1.21];
console.log(mixed);
// index numbers on arrays start at 0
// example of calling the index value of the 4th index position
var mixedIndex = mixed[4];
console.log(mixedIndex);
// output is 1.21

// arrays can contain objects and even other arrays
var arrayStuff = [{"name": "value"}, [1, 2, 3], true, "nifty"];
console.log(arrayStuff);
// individual idexes printed
console.log(arrayStuff[0]);
console.log(arrayStuff[1]);
console.log(arrayStuff[2]);
console.log(arrayStuff[3]);
// find amount of items
console.log("array length: ", arrayStuff.length);
// objects have properties and methods
// properties: meta information about the object
// method: function that belongs to the object
// arrays have a long list of methods, or functions. AKA things you can do to arrays
// example method call for an array
arrayStuff.entries(); //paste into console to see output
// ----------------passing args to array methods
var pens3 = ["red", "blue", "green", "orange"];
// calling to reverse the array
pens3.reverse();
// remove first value of array
pens3.shift();
// add new items to array
pens3.unshift("purple", "black");
// remove last value in array
pens3.pop();
// add value at end of array
pens3.push("pink", "prussian blue");
// find a specific index position and remove it syntax pens3.splice(position, num items to remove);
pens3.splice(2, 1);

// create a copy of array and place inside a variable, non-destructive to original array
var newPens = pens3.slice();
// add a new value to newPens, but not pens3
newPens.push("purple");

// search an array and store the index value in a new var
// syntax pens3.indexOf(search item, from index position);
var result = pens3.indexOf("prussian blue", 2);


// print
console.log("pens3: ", pens3);
console.log("New pens: ", newPens);
console.log("The index position is: ", result);
// gives the value instead of the index
console.log("The value is: ", pens3[result]);

// prints the items in an array with a comma separator
var arrayString = pens3.join(", ");
console.log("The array separated by commas: ", arrayString);
// prints with comma no spaces though
var arrayString2 = pens3.join();
console.log("The array separated by commas without spaces: ", arrayString2);

// ----------------manipulating arrays-----------
var cities = ["LA", "SF", "NY", "Austin"];
// modify items in array by index num
cities[3] = "houston";
// add a new index and value to array
cities[4] = "austin";
// add a new index and value at the end of the array
cities[cities.length] = "dallas";
// add value to end of array using push method
cities.push("san antonio");
// remove last value in an array
cities.pop();
// add values to beggining of array
cities.unshift("san antonio");
// remove value at beggining of array
cities.shift();
// remove value from specific index
cities.splice(3, 1);
// delete data at index, not the index slot. leaves an empty slot
delete cities[4];

// display item in array by index num
console.log(cities[3]);
// display items in array
console.log(cities);

