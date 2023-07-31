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
// write and store new descriptions
let newDescription1 = "Software Engineering with be a leading field for many years. Artificial Intelligence will not be able to replace it due the human factor of determining needs. Engineers who learn to effectively code first and then implement Artificial Intelligence will be top candidates in the future.";
let newDescription2 = "Computer Aided Design is one of the most critical skills for conducting mechanical design. Many if not all of the parts manufactured today are designed and stress analyzed using Computer Aided Design Software. This is a highly sought after skillset in all sectors of manufacturing.";
let newDescription3 = "The field of Robotics is growing rapidly for uses in automated manufacturing. Once paired with Machine Learning and Artificial Intelligence, we can achieve full automation of manufacturing. Despite the benefits, there are major risks associated with combining the two disciplines, such as AGI takeovers.";
// assign a const to the id
const newPrint1 = document.querySelector("#firstText");
const newPrint2 = document.querySelector("#secondText");
const newPrint3 = document.querySelector("#thirdText");
// store the new descriptions in the const/id
newPrint1.innerText = newDescription1;
newPrint2.innerText = newDescription2;
newPrint3.innerText = newDescription3;



// ------------------modify what each button does----------------------------
// add click event listener

