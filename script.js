"use strict";
const clientsSlide = document.querySelectorAll(".slide-client");
const prosDisc = document.querySelector(".products-discription");
const workWithSections = document.querySelectorAll(".work-with");
const heroSection = document.querySelector(".hero-section");
const navigationCell = document.querySelector(".application-nav");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");

//POSITIONING THE NAVIGATION
const navPosition = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      navigationCell.classList.add("fixed-nav");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
navPosition.observe(heroSection);

//SECTIONS TRANSITIONS
workWithSections.forEach((el) => el.classList.add("pro-dis-hide"));
const removingFunction = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    workWithSections.forEach((el) => el.classList.remove("pro-dis-hide"));
  }
};
const removeProClass = new IntersectionObserver(removingFunction, {
  root: null,
  threshold: 0,
});
workWithSections.forEach((el) => removeProClass.observe(el));
//PRODUCTS HEAD
prosDisc.classList.add("pro-dis-hide2");
const obsFUNC = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      prosDisc.classList.remove("pro-dis-hide2");
    }
  });
};
const prosObj = {
  root: null,
  threshold: 0,
};

const elPRODis = new IntersectionObserver(obsFUNC, prosDisc);
elPRODis.observe(prosDisc);
//CLIENT SLIDER FUNCTIONALLITY
let curValue = 0;
let maxlength = clientsSlide.length;
let time = 3;
let secTime = 5;
let thirTime = 7;
clientsSlide.forEach(
  (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
);

const slideSolution = function (slideValue) {
  clientsSlide.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - slideValue)}%)`;
  });
};

function slideToRight() {
  if (curValue === maxlength - 1) curValue = -1;
  curValue++;
  slideSolution(curValue);
}

function slideToLeft() {
  if (curValue === 0) curValue = maxlength;
  curValue--;
  slideSolution(curValue);
}

setInterval(function () {
  time--;
  secTime--;
  thirTime--;
  if (time === 0) {
    slideToRight();
  }
  if (secTime === 0) {
    slideToRight();
  }
  if (thirTime === 0) {
    slideToRight();
  }
}, 1000);
btnRight.addEventListener("click", slideToRight);
btnLeft.addEventListener("click", slideToLeft);
