/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  description:
    "A green kids backpack designed to make the lid look like the face of a frog sticking out its tongue.",
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

/**
 * addFigure function
 * - Receives dataObj
 * - Creates <figure> <img> <figcaption>
 * - Returns <figure>
 */

/**
 * createArticle function
 * - Receives backpack object
 * - Creates <article>
 * - Calls addFigure()
 * - Returns <article>
 */

const figureFunction = (object) => {
  let figureEle = document.createElement("figure");
  let imageEle = document.createElement("img");
  imageEle.setAttribute("src", object.image);
  imageEle.setAttribute("alt", "");
  let figCap = document.createElement("figcaption");
  figCap.innerText = object.description;
  figureEle.append(imageEle, figCap);
  return figureEle;
};

const articleFunction = (frogpack) => {
  let articleElement = document.createElement("article");
  articleElement.innerHTML = content;
  document.body.prepend(figureFunction(frogpack));
  return articleElement;
};
document.querySelector("main").append(articleFunction(frogpack));
/**
 * addFigure function
 * - Receives dataObj
 * - Creates <figure> <img> <figcaption>
 * - Returns <figure>
 */

/**
 * createArticle function
 * - Receives backpack object
 * - Creates <article>
 * - Calls addFigure()
 * - Returns <article>
 */

const addFigure = (dataObj) => {
  let newFig = document.createElement("figure");
  let newimg = document.createElement("img");
  newimg.setAttribute("src", dataObj.image);
  newimg.setAttribute("alt", "")
  let newFigCap = document.createElement("figcaption")
  newFigCap.innerText = dataObj.description;
  newFig.append(newimg, newFigCap);
  return newFig;
}

const createArticle = (frogpack) => {
  let newArticle = document.createElement("article");
  newArticle.innerHTML = content
  newArticle.prepend(addFigure(frogpack));
  return newArticle;  
}
document.body.querySelector("main").append(createArticle(frogpack))