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

// -----------------------query selectors-------------------------------------------
// use querySelector and querySelectorAll for most uses unless needing specificity
// get first element matching specified selector 
document.querySelector(".main-nav a")
// get all elements matching specified selector
document.querySelectorAll(".post-content p")
// example query from 05_02 site
document.querySelector(".masthead");
// example queryAll from 05_02 site
document.querySelectorAll("a")
NodeList(50)[a.skip - link.screen - reader - text, a, a, a, a, a, a, a, a,
    a.reserve, a, a, a.content - button, a, a.content - button, a, a.content - button,
    a, a.content - button, a, a.content - button, a, a.content - button, a, a.content - button,
    a, a.content - button, a.content - button, a.content - button, a.content - button, a.content - button,
    a.content - button, a, a.flex - active, a, a, a.flex - prev, a.flex - next, a, a, a, a, a, a, a,
    a.icon - linkedin, a.icon - twitter, a.icon - facebook, a.icon - instagram, a.icon - youtube]
// example specific element search
document.querySelector(".menu .has-children a")
// all links to linkedin.com
document.querySelectorAll(".social-nav a[href*='linkedin.com']")
// retuns to console:
// NodeList [a.icon-linkedin]
// 0 : a.icon-linkedin
// length : 1
// [[Prototype]] : NodeList

// numerous queries separate by a comma
// all links inside li in the menu or social nav
document.querySelectorAll(".menu li a, .social-nav li a")
NodeList(13)[a, a, a, a, a, a, a, a.reserve, a.icon - linkedin, a.icon - twitter, a.icon - facebook,
    a.icon - instagram, a.icon - youtube]

// -----------------------access and change elements--------------------------
// get the h2 element
document.querySelector(".main-title").innerHTML
// result
'Welcome to Moonwalk Manor'
document.querySelector(".main-title").outerHTML
// result
'<h2 class="main-title">Welcome to Moonwalk Manor</h2>'

// modify from console
document.querySelector(".main-title").innerHTML = "All your headings are belong to us!"
// result
'All your headings are belong to us!'
// get element using id and modify
document.querySelector("#showcase").innerHTML = "slideshow"
// results, no longer displays the actuall slideshow
'slideshow'
// element with 2 classes
document.querySelector(".masthead");
// results show both masthead and clear for class names
<header class="masthead clear">​<div class="site-header centered">​…​</div>​flex<!-- .centered --></header>
// query the class names
document.querySelector(".masthead").className
// results
'masthead clear'
// query class list
document.querySelector(".masthead").classList
// results array
DOMTokenList(2)['masthead', 'clear', value: 'masthead clear']
// access by array index
document.querySelector(".masthead").classList[1]
// results, note classList is read only can not change the class name value
"clear"

// -----------------------access and change classes--------------------------
// uses methods add(String [, String]), remove(String [, String]), toggle(String [, String]),
// contains(String)
// add a new class
document.querySelector(".masthead").classList.add("new-class")
// results by query
document.querySelector(".masthead").classList
DOMTokenList(3)['masthead', 'clear', 'new-class', value: 'masthead clear new-class']
// remove a class
document.querySelector(".masthead").classList.remove("clear")
// results
document.querySelector(".masthead").classList
DOMTokenList(2)['masthead', 'new-class', value: 'masthead new-class']
// item returns class value at index
document.querySelector(".masthead").classList.item(1)
// results
'new-class'
// toggle turns on or off a class
document.querySelector(".new-class").classList.toggle(".masthead")
// returns a bool value false = off true = on
// contains checks if the specified class attribute exists in the element
document.querySelector(".clear").classList.contains(".masthead")
// results
true

// -----------------------access and change attributes--------------------------
// hasAttribute() returns true if element has attribute
// getAttribute() returns the value of a specified element
// setAttribute(name, value) 2 args, sets the value
// removeAttribute() removes specified attribute
// use contant because we're never gonna change element
const CTAELEMENT = document.querySelector(".cta a");
// use if/else to set attribute value
if (CTAELEMENT.hasAttribute("target")) {
    console.log(CTAELEMENT.getAttribute("target"));
} else {
    CTAELEMENT.setAttribute("target", "_blank");
}
// ddisplay results
console.log(CTAELEMENT.attributes);
// results
// NamedNodeMap {0: href, 1: target, href: href, target: target, length: 2}
// note the value of target is _blank

// ------------------------add DOM elements------------------------------------
// 4 steps
// 1. create the element .createElement()
// 2. create the text node that goes inside the element .createTextNode()
// 3. add the text node to the element .appendChild()
// 4. add the element to the DOM tree
// example
// setup constants
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");
// get alt attribute
var altText = THEIMAGE.getAttribute("alt");
// create figcaption element and place in var
var captionElement = document.createElement("figcaption");
// create text node to hold alt text and place in var
var captionText = document.createTextNode(altText);
// append captionText text node inside caption element
captionElement.appendChild(captionText);
// append new figcaption to the featured-image figure or add to DOM tree
FEATURED.appendChild(captionElement);
// clear alt text from img
THEIMAGE.setAttribute("alt", "");
// *******alt method using the new append()**************
// not supported by all browsers yet
// setup constants
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");
// get alt attribute
var altText = THEIMAGE.getAttribute("alt");
// create figcaption element and place in var
var captionElement = document.createElement("figcaption");
// place alt text into figcaption
captionElement.append(altText);
// append new figcaption to the featured-image figure or add to DOM tree
FEATURED.appendChild(captionElement);
// clear alt text from img
THEIMAGE.setAttribute("alt", "");

// --------------------------add inline CSS to an element---------------------
/// js won't write to css only individual element
// see styles applied to element by calling in console:
document.querySelector(".cta a").style
// result no inline css properties
// CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
// assign specific style property by targeting directly
document.querySelector(".cta a").style.color = "green";
// results changes color of Book Now! to green and updates html to this:
// <a href="#" style="color: green;">Book Now!</a> 
// hyphens convert to camelCase, example background-color:
document.querySelector(".cta a").style.backgroundColor = "blue";
// results
//<a href="#" style="color: green; background-color: blue;">Book Now!</a>
// ********grouping style properties together in a single string*******
document.querySelector(".cta a").style.cssText = "padding: 1em; color: white; background-color: red;";
// note style is an attribute and value is typical css values "color: red;"
// we can use .hasAttribute(); .getAttribute(); .setAttribute(); and .removeAttribute() methods with style
//                              note args    ("attribute name", "css value")
//                              note can use multiple values separated by spaces
// note this removes all previous inline css values from the attribute and replaces them
document.querySelector(".cta a").setAttribute("style", "padding: 2em; color: green; background-color: blue;");
// note inline styles override what the style sheet is doing
// in most cases, best practice is to create CSS rules and use JS to manage these classes to apply the rules
// to the element.

// -----------------------DOM events and event handling----------------------------------
// Browser level events: Browser behavior(load, window resize, etc.)
// DOM level events: Content interaction(click, focus, submit, etc.)
// any event the browser reacts to is an event you can hook into and modify with JS
// ----------------------trigger functions with event handlers-------------------
// declare consts
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

// remove hide class from button, add it to the alert
CTA.classList.remove("hide");
ALERT.classList.add("hide");

// function to toggle the hide class on and off
// e represents an event object
function reveal(e) {
    // prevents the page from reloading with each event 
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

// eventhandler
// by leaving off the parenthesis on the fx, it keeps it from running as soon as the page loads
CTA.onclick = reveal;

// ------------------------add and use event listeners------------------------------
