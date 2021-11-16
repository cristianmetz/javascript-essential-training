/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


const test = document.querySelector("main .grid");
const allLi = document.querySelectorAll("li.cell");

test.addEventListener("mouseenter", (event) =>{
    test.style.backgroundColor = "Blue";
} )

test.addEventListener("mouseleave", (event) =>{
    test.style.backgroundColor = "white";
} );

const cellOne = document.querySelector("li.cell.cell01")
console.log(cellOne);