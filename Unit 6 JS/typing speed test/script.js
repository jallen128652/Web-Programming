const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
// global var 
// array to capture minutes, seconds, .01 seconds, .001 seconds
var timer = [0, 0, 0, 0];
// var to pass interval outside of start()
var interval;
// var to 
var timerRunning = false;


// Add leading zero to numbers 9 or below (purely for aesthetics):
// helper fx()
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}


// Run a standard minute/second/hundredths timer:
function runTimer() {
    // passes in the time value from leadingZero() so that it adds the zero in front of the current count 
    // until it reaches the 10th value
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    // calls the .timer id and stores a value
    theTimer.innerHTML = currentTime;
    // increments time in 1000th's of a second at the 3rd index position
    timer[3]++;
    // converts to minutes
    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    // stores the value in the text area
    let textEntered = testArea.value;
    // grabs the origin text as a substring array and stores it in a var 
    // start position arg and how many chars arg
    let originTextMatch = originText.substring(0, textEntered.length);
    // now we can test the lengths between textEntered and originTextMatch
    // changes the colors of the border box to green, blue and red
    if (textEntered == originText) {
        // stop the clock
        clearInterval(interval);
        // change color to green
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            // change color to blue
            testWrapper.style.borderColor = "#65CCF3";
        } else {
            // change color to red
            testWrapper.style.borderColor = "#E95D0F";
        }
    }
}

// Start the timer:
// starts timer on very first keypress
function start() {
    let textEnteredLength = testArea.value.length;
    // first keypress and timer is not running
    if (textEnteredLength === 0 && !timerRunning) {
        // bool value update in global var
        timerRunning = true;
        // sets interval every .100 of a second in the runTimer() 
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnteredLength);
}

// Reset everything:
function reset() {
    // clears the timer
    clearInterval(interval);
    // sets timer to null, keeps same interval and index number on timer
    interval = null;
    // reset the timer
    timer = [0, 0, 0, 0];
    // timer running false
    timerRunning = false;
    // clear text area
    testArea.value = "";
    // reset the timer
    theTimer.innerHTML = "00:00:00";
    // reset border box color
    testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset button:
// listens for any keypress
testArea.addEventListener("keypress", start, false);
// listens for the release
testArea.addEventListener("keyup", spellCheck, false);
// listens for start over button press
resetButton.addEventListener("click", reset, false);
