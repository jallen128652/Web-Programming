// -------------loops with arrays-----------
var hobbies = ["disk golf", "drones", "cars", "coding", "creations"];
console.log(hobbies);
// for loop cycling through index positions
for (index = 0; index < hobbies.length; index++){
    console.log(hobbies[index]);
}

// -------------enumerative loops---------------
// the variable ties into the index values of the array
for (var index in hobbies) {
    console.log(index, hobbies[index]);
}