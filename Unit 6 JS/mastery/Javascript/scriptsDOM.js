// ------------------modify body paragraph----------------------------
// get the text and store it
const introText = document.querySelector(".intro p").innerHTML;
// create new text and store it
const newText = "Welcome to TSTC. We have an amazing program with the opportunity to give you life changing skills. Whatever your goals are, we can assist you with reaching them. We pride ourselves in our students' success!";
// new const to store the text into the element
const newPrint = document.querySelector(".intro p");
// assign new text to the text content of the element
newPrint.textContent = newText;

// ------------------modify pics and figcaptions--------------------------
// query the images by id to get url
const firstPic = document.getElementById("firstImage").src;
const secondPic = document.getElementById("secondImage").src;
const thirdPic = document.getElementById("thirdImage").src;
console.log(firstPic);
console.log(secondPic);
console.log(thirdPic);
// setup array for image titles
let titles = document.querySelectorAll(".content-title").innerHTML; //not correct yet
// change the paragraph for each image and adjust css to fit

// ------------------modify what each button does----------------------------
// add click event listener

