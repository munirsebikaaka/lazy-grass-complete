"use strict";
const clientsSlide = document.querySelectorAll(".slide-client");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");

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

const autoSlide = function () {
  setInterval(function () {
    time--;
    secTime--;
    thirTime--;
    if (time === 0) {
      slideToRight();
      console.log("its time");
    }
    if (secTime === 0) {
      slideToRight();
    }
    if (thirTime === 0) {
      slideToRight();
      autoSlide();
    }
  }, 1000);
};
autoSlide();
let reTime = 60;
function tryReverse() {
  setInterval(function () {
    reTime--;
    if (thirTime === 0) {
      autoSlide();
      console.log("its the last time");
    }
  }, 1000);
}
tryReverse();
btnRight.addEventListener("click", slideToRight);
btnLeft.addEventListener("click", slideToLeft);
