/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

/**
 * Tasks:
 * Identify specific elements you want to target
 * Use the console (script.js file) to find those target elements
 * Target specific elements nested inside other elements
 * Try advanced CSS queries to get specific targets
 * Experinent with both querySelector and querySelectorAll
 *
 * Advanced
 * Try populating a variable with an element higher up in the DOM
 * tree hyerarchy and then use a querySelector on that variable
 * to find one of its children
 */

//Selects first child
document.querySelector("main li:first-child");

//Makes the 5th button background red
document.querySelectorAll("button");
var x = document.querySelectorAll("button");
x[5].style.backgroundColor = "red";

//Makes the background color if the article#pack02 green
document.querySelector("article#pack02");
var y = document.querySelector("article#pack02");
y.style.backgroundColor = "Green";

//Makes the lid status of backpack02 orange
document.querySelectorAll("li.feature.backpack__lid");
var z = document.querySelectorAll("li.feature.backpack__lid");
z[1].style.backgroundColor = "Orange";
