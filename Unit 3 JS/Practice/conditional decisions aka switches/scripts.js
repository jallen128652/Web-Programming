var answer = window.prompt("Type YES, NO or MAYBE. Then click OK.");
// if else version
if (answer === "YES") {
    console.log("You said YES!");
} else if (answer === "MAYBE") {
    console.log("You said maybe. I don't know what to make of that.");
} else if (answer === "NO") {
    console.log("You said no. :(");
} else {
    console.log("You rebel, you!");
}
// switch case version
// first right answer wins and then it breaks out of the switch block. If no true, default is like else
// if you don't include a break, it will continue down and execute each block till it hits a break
var answer2 = window.prompt("Type YES, NO or MAYBE. Then click OK.");
switch (answer2) {
    case "YES":
        console.log("You said YES!");
        break;
    case "MAYBE":
        console.log("You said maybe. I don't know what to make of that.");
        break;
    case "NO":
        console.log("You said no. :(");
        break;
    default:
        console.log("You rebel, you!");
        break;
}

// switch case is best suited for single variable condition testing with multiple tests
// can use any JS expression format to include loops

var month = window.prompt("Type an abreviated month: Example: \"Mar\"");

switch (month) {
    case "Jan":
        console.log(1);
        break;
    case "Feb":
        console.log(2);
        break;
    case "Mar":
        console.log(3);
        break;
    case "Apr":
        console.log(4);
        break;
    case "May":
        console.log(5);
        break;
    case "Jun":
        console.log(6);
        break;
    case "Jul":
        console.log(7);
        break;
    case "Aug":
        console.log(8);
        break;
    case "Sep":
        console.log(9);
        break;
    case "Oct":
        console.log(10);
        break;
    case "Nov":
        console.log(11);
        break;
    case "Dec":
        console.log(12);
        break;
    default:
        console.log("Not a valid month entry.")
        break;
}