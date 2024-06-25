"use strict";
const clientsSlide = document.querySelectorAll(".slide-client");
const prosDisc = document.querySelector(".products-discription");
const workWithSections = document.querySelectorAll(".work-with");
const heroSection = document.querySelector(".hero-section");
const productsImages = document.querySelectorAll(".product-img");
const navigationCell = document.querySelector(".application-nav");
const footerNav = document.querySelector(".footer-logo");
const appLinks = document.querySelectorAll(".working-link");
const containerDots = document.querySelector(".dots");

const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");

//SMOOTH SCROLLING FUNCTIONALLITY
function workWithSmoothScrollings(target) {
  if (target.classList.contains("working-link")) {
    const id = target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
}
navigationCell.addEventListener("click", function (e) {
  e.preventDefault();
  workWithSmoothScrollings(e.target);
});
footerNav.addEventListener("click", (e) => {
  e.preventDefault();
  workWithSmoothScrollings(e.target);
});

//FILTERING THE PRODUCTION IMAGES
productsImages.forEach((img) => img.classList.add("lazy-img"));
const imgObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setInterval(function () {
        productsImages.forEach((img) => img.classList.remove("lazy-img"));
      }, 1000);
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
productsImages.forEach((img) => imgObserver.observe(img));

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
//PRODUCTS HEAD TRANSITION
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

clientsSlide.forEach((el, i) => {
  containerDots.insertAdjacentHTML(
    "beforeend",
    `<p class="dot" data-slide="${i}"></p>`
  );
});
containerDots.addEventListener("click", (e) => {
  if (e.target.classList.contains("dot")) {
    const slide = e.target.dataset.slide;
    slideSolution(slide);
  }
});
const dot = document.querySelectorAll(".dot");
dot[0].classList.add("active-dot");
const activateDot = function (slide) {
  dot.forEach((el) => el.classList.remove("active-dot"));
  document
    .querySelector(`.dot [data-slide='${slide}']`)
    .classList.add("active-dot");
};
// activateDot();
function slideToRight() {
  if (curValue === maxlength - 1) curValue = -1;
  curValue++;
  slideSolution(curValue);
  activateDot(curValue);
}

function slideToLeft() {
  if (curValue === 0) curValue = maxlength;
  curValue--;
  slideSolution(curValue);
}

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") slideToRight();
  if (e.key === "ArrowLeft") slideToLeft();
});

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
