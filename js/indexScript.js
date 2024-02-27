let inputSearch = document.querySelector(".searchIcon");
let inputUp = document.querySelector(".inputSearch");
let links = document.querySelector(".links");
let display = document.querySelector(".display");
let rightSide = document.querySelector(".rightSide");
let screen = document.querySelector(".screen");
let home = document.querySelector(".home");
let navBar = document.querySelector(".navBar");
let container = document.querySelector(".container");

inputSearch.addEventListener("click", (eI) => {
  if (links.getAttribute("linksVal") === "false") {
    links.style.cssText = ` transform: translateX(-400px);`;
    links.setAttribute("linksVal", "true");
    inputUp.style.cssText = `top: 5px;`;
    document.querySelector(".search").style.cssText = `display:none;`;
    document.querySelector(".close").style.cssText = `display:block;`;
  } else {
    links.style.cssText = ` transform: translateX(0px);`;
    links.setAttribute("linksVal", "false");
    inputUp.style.cssText = `top: 150%;`;
    document.querySelector(".search").style.cssText = `display:block;`;
    document.querySelector(".close").style.cssText = `display:none;`;
  }
});

function test() {
  display.innerHTML = inputUp.value;
}

document.addEventListener("click", (eI) => {
  if (eI.target == home || eI.target == navBar || eI.target == container) {
    links.style.cssText = ` transform: translateX(0px);`;
    links.setAttribute("linksVal", "false");
    inputUp.style.cssText = `top: 150%;`;
    document.querySelector(".search").style.cssText = `display:block;`;
    document.querySelector(".close").style.cssText = `display:none;`;
  }
});
