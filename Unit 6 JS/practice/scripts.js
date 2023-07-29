// BOM commands
window.innerWidth // gives width of window in px
window.open() // opens new tab
// DOM commands and notes
window.document // calls the document Document has it's own object module.
// document is one giant object, elements inside the html doc are nodes
// retrieve elements from console
document.body
document.title
document.URL
// DOM methods
// get the element with the specified id name
document.getElementById("some-ID")
// get all elements with this class name as an array
document.getElementsByClassName("classname")
// get all elements with this HTML tag as an array
document.getElementsByTagName("HTML tag")
// get first element matching specified selector
document.querySelector(".main-nav a")
// get all elements matching specified selector
document.querySelectorAll(".post-content p")

