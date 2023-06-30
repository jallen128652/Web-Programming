//Notes: don't comment out the code from each requirement. You will use the variables throughout the assignment. 

//1. Create an array with five different pets names.
//enter code below
var pets = ["Bandit", "Rover", "Cali", "Tom", "Tank"];


//2. Create an array for a student that has 5 grades ranging from 50 - 100.
//enter code below
var grades = [95, 87, 91, 100, 89];

//3. Loop through the pets array using a for loop to print out each index item to the console.
//enter code below
for (i = 0; i < pets.length; i++) {
    console.log(pets[i]);
}

//4. loop through the student grade array using a for loop to print out each index item to the console.
//enter code below
for (x = 0; x < grades.length; x++) {
    console.log(grades[x]);
}

//5. Print out the pets array using an enumerative loop.
//enter code below
for (var y in pets) {
    console.log(pets[y]);
}
//6. Print out the student grades array using a do-while loop. create any extra variables necessary to complete the task.
//enter code below
var j = 0;
do {
    console.log(grades[j]);
    j++;
} while (j < grades.length);

//7. create a variable called sum and assign it to zero
//enter code below
var sum = 0;
//8. Using the student grade array, add all the values from the array using a loop of your choice and store the sum value in the variable sum.
//enter the code below
for (x = 0; x < grades.length; x++) {
    console.log(grades[x]);
    sum = sum + grades[x];
}
console.log(sum);
//9. Next create a variable called average, take the sum and divide it by the array.length.
//enter the code below
var avg = sum / grades.length;

//10. Print out the variable average to the console.
//enter code below
console.log("The average grade is: " + avg);


