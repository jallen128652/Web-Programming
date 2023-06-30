// -------------------declare and populate arrays---------------------
// array with books of the Kay Scarpetta series by Patricia Cornwell
var books = ["Postmortem", "Body of Evidence", "All That Remains", "Cruel and Unusual",
 "The Body Farm", "From Potter's Field", "Cause of Death", "Unnatural Exposure",
  "Point of Origin", "Black Notice", "The Last Precinct", "Blow Fly", "Trace", "Predator",
   "Book of the Dead", "Scarpetta", "The Scarpetta Factor", "Port Mortuary", "Red Mist",
    "The Bone Bed", "Dust", "Flesh and Blood", "Depraved Heart", "Chaos"];
// array with books of the Rizzoli and Isles series by Tess Gerritsen
var books2 = ["The Surgeon", "The Apprentice", "The Sinner", "Body Double", "Vanish",
 "The Mephisto Club", "The Keepsake/Keeping the Dead", "Ice Cold", "The Silent Girl",
  "The Killing Place", "Last to Die", "Die Again", "I Know a Secret"];
// a string with the books of the Eve Duncan series by Iris Johansen
var books3 = "The Face Of Deception, The Killing Game, The Search, Body Of Lies, Blind Alley, Countdown, Stalemate, Quicksand, Blood Game, Eight Days To Live, Chasing The Night, Eve, Quinn, Bonnie, Sleep No More, Taking Eve, Hunting Eve, Silencing Eve, Shadow Play, Hide Away, Night And Day, Mind Game, Shattered Mirror, Vendetta, Dark Tribute, Smokescreen";
// array with the grades
var grades = [83, 93, 86, 75, 96, 84, 80, 77, 73, 94, 91, 93, 86, 84, 82, 90];
// array with the names of dead mystery writers
var writers = ["Agatha Christie", "Robert B. Parker", "Arthur Conan Doyle", "Edgar Allan Poe",
 "Earl Stanley Gardner", "Sue Grafton"];
// array with the names of living mystery writers
var writers2 = ["Patricia Cornwell", "James Ellroy", "Michael Connelly", "Ian Rankin",
 "Kathy Reichs", "John Grisham", "David Baldacci", "James Patterson", "P. D. James",
  "Tess Gerritsen", "Iris Johansen", "Janet Evanovich", "Joanne Fluke"]; 

// ---------------actions-----------------
// the number of Kay Scarpetta books
console.log(books.length);
// the Rizzoli and Isles books into alphabetical order
alphabeticalOrder = books2.sort();
console.log(alphabeticalOrder);
// add the grade 89 to the grades array
grades.push(89);
console.log(grades);
// Convert the grades array to a string
let stringGrades = grades.toString().split(",");
console.log(stringGrades);
// Remove the last grade from the grades array
grades.pop();
console.log(grades);
// Remove the first grade from the grades array
grades.shift();
console.log(grades);
// Add the grade 94 to the start of the grades array
grades.unshift(94);
console.log(grades);
// Starting with the 9th position and don't remove any elements of the array, add the grades 
// 98, 71, and 63
grades.splice(9, 0, 98, 71, 63);
console.log(grades);
// Remove the 12th grade from the grades array
grades.splice(12, 1);
console.log(grades);
// Merge the living and dead mystery writer arrays into a single array
var allBooks = [].concat(writers, writers2);
console.log(allBooks);
