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
// const firstPic = document.getElementById("firstImage").src;
// const secondPic = document.getElementById("secondImage").src;
// const thirdPic = document.getElementById("thirdImage").src;
// console.log(firstPic);
// console.log(secondPic);
// console.log(thirdPic);
// create new consts to store new url to the img src
const newFirstPic = document.getElementById("firstImage").src = "Images/codingSmall-500.jpg";
const newSecondPic = document.getElementById("secondImage").src = "Images/cadDesignSmall-500.jpg";
const newThirdPic = document.getElementById("thirdImage").src = "Images/roboticsSmall-500.jpg";

// setup array for image titles
let titles = document.querySelectorAll(".content-title");
// store new text in the titles by array index number
titles[0].innerHTML = "Software Enginering";
titles[1].innerHTML = "Computer Aided Design";
titles[2].innerHTML = "Robotics";
// change the description paragraph for each image to fit the new images


// ------------------modify what each button does----------------------------
// add click event listener

