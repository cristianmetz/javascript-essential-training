/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


// const test = document.querySelector("main .grid");
// const allLi = document.querySelectorAll("li.cell");

// test.addEventListener("mouseenter", (event) =>{
//     test.style.backgroundColor = "Blue";
// } )

// test.addEventListener("mouseleave", (event) =>{
//     test.style.backgroundColor = "white";
// } );

const cellOne = document.querySelector("li.cell.cell01");
const cellTwo = document.querySelector("li.cell.cell02");
const cellThree = document.querySelector("li.cell.cell03");
const cellFour = document.querySelector("li.cell.cell04");
const cellFive = document.querySelector("li.cell.cell05");
const cellSix = document.querySelector("li.cell.cell06");
const cellSeven = document.querySelector("li.cell.cell07");
const cellEight = document.querySelector("li.cell.cell08");
const cellNine = document.querySelector("li.cell.cell09");
const cellTen = document.querySelector("li.cell.cell10");
const cellEleven = document.querySelector("li.cell.cell11");
const cellTwelve = document.querySelector("li.cell.cell12");
const cellThirteen = document.querySelector("li.cell.cell13");
const cellFourteen = document.querySelector("li.cell.cell14");
const cellFifteen = document.querySelector("li.cell.cell15");
const cellSixteen = document.querySelector("li.cell.cell16");
const cellSeventeen = document.querySelector("li.cell.cell17");
const cellEightteen = document.querySelector("li.cell.cell18");
const cellNineteen = document.querySelector("li.cell.cell19");
const cellTwenty = document.querySelector("li.cell.cell20");
const cellTwentyone = document.querySelector("li.cell.cell21");
const cellTwentytwo = document.querySelector("li.cell.cell22");
const cellTwentythree = document.querySelector("li.cell.cell23");
const cellTwentyfour = document.querySelector("li.cell.cell24");
const cellTwentyfive = document.querySelector("li.cell.cell25");
const cellTwentysix = document.querySelector("li.cell.cell26");
const cellTwentyseven = document.querySelector("li.cell.cell27");
const cellTwentyeight = document.querySelector("li.cell.cell28");

const Boxes = [cellOne, cellTwo, cellThree, cellFour, cellFive, cellSix, cellSeven ,cellEight, cellNine, cellTen, cellEleven, cellTwelve, cellThirteen, cellFourteen, cellFifteen, cellSixteen, cellSeventeen, cellEightteen, cellNineteen, cellTwenty, cellTwentyone, cellTwentytwo, cellTwentythree, cellTwentyfour, cellTwentyfive, cellTwentysix, cellTwentyseven, cellTwentyeight ];

Boxes.forEach(element => {
    this.addEventListener("mouseenter", (event) =>{
        test.style.backgroundColor = "black";
    });

    this.addEventListener("mouseleave", (event) =>{
        test.style.backgroundColor = "red";
    }); 
});

document.addEventListener("mouseover", (event) =>{
        Boxes.style.Color = "black";
    });

document.addEventListener("mouseleave", (event) =>{
        Boxes.style.Color = "red";
    }); 