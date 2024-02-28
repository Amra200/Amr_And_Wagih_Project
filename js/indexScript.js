let inputSearch = document.querySelector(".searchIcon");
let inputUp = document.querySelector(".inputSearch");
let links = document.querySelector(".links");
let display = document.querySelector(".display");
let rightSide = document.querySelector(".rightSide");
let navBar = document.querySelector(".navBar");
let container = document.querySelector(".container");
let linkAll = document.querySelectorAll(".link");
let linksMin = document.querySelector(".linksMin");
let bars = document.querySelector(".bars");
let image = document.querySelector(".image");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

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

for (let i = 0; i < linkAll.length; i++) {
  linkAll[i].addEventListener("mouseenter", (eI) => {
    eI.target.classList.add("active");
    for (let j = 0; j < linkAll.length; j++) {
      if (linkAll[j] != eI.target) {
        linkAll[j].classList.remove("active");
      }
    }
  });

  linkAll[i].addEventListener("mouseleave", (eI) => {
    eI.target.classList.remove("active");
    linkAll[0].classList.add("active");
  });
}

bars.addEventListener("click", () => {
  if (linksMin.getAttribute("pos") == "up") {
    linksMin.style.cssText = `left: 0px;`;
    linksMin.setAttribute("pos", "down");
  } else {
    linksMin.style.cssText = `left: -100%;`;
    linksMin.setAttribute("pos", "up");
  }
});

let photos = [
  "./images/wallpaperflare.com_wallpaper (1).jpg",
  "./images/wallpaperflare.com_wallpaper (2).jpg",
  "./images/wallpaperflare.com_wallpaper.jpg",
];

image.setAttribute("src", `${photos[0]}`);
let count = 0;

left.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = photos.length - 1;
  }
  image.setAttribute("src", `${photos[count]}`);
});

right.addEventListener("click", () => {
  count++;
  if (count == photos.length) {
    count = 0;
  }
  image.setAttribute("src", `${photos[count]}`);
});
