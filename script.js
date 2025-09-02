/* start: arrow settings */
const arrow0 = document.querySelector(".arrow0");
const trendFilmsWrapper = document.querySelector(".trend-films-wrapper");

const arrow1 = document.querySelector(".arrow1");
const latestTrailersFilmsWrapper = document.querySelector(".latest-trailers-films-wrapper");

const arrow2 = document.querySelector(".arrow2");
const popularFilmsWrapper = document.querySelector(".popular-films-wrapper");

const arrow3 = document.querySelector(".arrow3");
const freeWatchFilmsWrapper = document.querySelector(".free-watch-films-wrapper");


let counter0 = 0;
const totalItems0 = trendFilmsWrapper.querySelectorAll(".t-films").length;
const visibleCount0 = 8;   
const stepPx0 = 300;       
const maxMoves0 = Math.max(0, totalItems0 - visibleCount0);
let offset0 = 0;
arrow0.addEventListener("click", () => {
  if (counter0 < maxMoves0) {
    counter0++;
    offset0 -= stepPx0;
    trendFilmsWrapper.style.transform = `translateX(${offset0}px)`;
  } else {
    counter0 = 0;
    offset0 = 0;
    trendFilmsWrapper.style.transform = "translateX(0)";
    counter0 = 0;}
});

let counter1 = 0;
const totalItems1 = latestTrailersFilmsWrapper.querySelectorAll(".lt-films").length;
const visibleCount1 = 2;   
const stepPx1 = 300;       
const maxMoves1 = Math.max(0, totalItems1 - visibleCount1);
let offset1 = 0;
arrow1.addEventListener("click", () => {
  if (counter1 < maxMoves1) {
    counter1++;
    offset1 -= stepPx1;
    latestTrailersFilmsWrapper.style.transform = `translateX(${offset1}px)`;
  } else {
    counter1 = 0;
    offset1 = 0;
    latestTrailersFilmsWrapper.style.transform = "translateX(0)";
    counter1 = 0;}
});

let counter2 = 0;
const totalItems2 = popularFilmsWrapper.querySelectorAll(".p-films").length;
const visibleCount2 = 8;   
const stepPx2 = 300;       
const maxMoves2 = Math.max(0, totalItems2 - visibleCount2);
let offset2 = 0;
arrow2.addEventListener("click", () => {
  if (counter2 < maxMoves2) {
    counter2++;
    offset2 -= stepPx2;
    popularFilmsWrapper.style.transform = `translateX(${offset2}px)`;
  } else {
    counter2 = 0;
    offset2 = 0;
    popularFilmsWrapper.style.transform = "translateX(0)";
    counter2 = 0;}
});

let counter3 = 0;
const totalItems3 = freeWatchFilmsWrapper.querySelectorAll(".fw-films").length;
const visibleCount3 = 8;   
const stepPx3 = 300;       
const maxMoves3 = Math.max(0, totalItems3 - visibleCount3);
let offset3 = 0;
arrow3.addEventListener("click", () => {
  if (counter3 < maxMoves3) {
    counter3++;
    offset3 -= stepPx3;
    freeWatchFilmsWrapper.style.transform = `translateX(${offset3}px)`;
  } else {
    counter3 = 0;
    offset3 = 0;
    freeWatchFilmsWrapper.style.transform = "translateX(0)";
    counter3 = 0;}    
});
/* end: arrow settings */

/* start: dark mode */
const ball = document.querySelector(".switch-mode-slide");
const items = document.querySelectorAll(".container, .switch-popular-films span, .switch-popular-films, .profile-text, .search-bar-box")
ball.addEventListener("click", function(){
  items.forEach((item) => item.classList.toggle("active"))
})
/* end: dark mode */
