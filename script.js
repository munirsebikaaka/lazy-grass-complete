"use strict";
const clientsSlide = document.querySelectorAll(".slide-client");
const prosDisc = document.querySelector(".products-discription");
const workWithSections = document.querySelectorAll(".work-with");
const heroSection = document.querySelector(".hero-section");
const applicationImages = document.querySelectorAll(".addLazy");
const navigationCell = document.querySelector(".application-nav");
const footerNav = document.querySelector(".footer-logo");
const appLinks = document.querySelectorAll(".working-link");
const containerDots = document.querySelector(".dots");
const imgDotsContainer = document.querySelector(".container-img-dots");
const heroInput = document.querySelector(".register-input");

const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const btnImageRight = document.querySelector(".img-right");
const btnImageLeft = document.querySelector(".img-left");
const startRequestBTN = document.querySelectorAll(".chech-input");

//SMOOTH SCROLLING FUNCTIONALLITY
startRequestBTN.forEach((btn) =>
  btn.addEventListener("click", function () {
    let value = heroInput.value;
    if (!value) return alert("Please input email.");
    console.log(value);
  })
);
function allAboutScrolling() {
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
}
allAboutScrolling();

//FILTERING THE PRODUCTION IMAGES
applicationImages.forEach((img) => img.classList.add("lazy-img"));
function lazyLoadingImage(img) {
  const imgObserver = new IntersectionObserver(
    function (entries) {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setInterval(function () {
          img.classList.remove("lazy-img");
        }, 2000);
      }
    },
    {
      root: null,
      threshold: 0,
    }
  );
  imgObserver.observe(img);
}
applicationImages.forEach((img) => lazyLoadingImage(img));

//POSITIONING THE NAVIGATION

function positionNavigation() {
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
}
positionNavigation();

//SECTIONS TRANSITIONS
// function fedInSections() {
//   workWithSections.forEach((el) => el.classList.add("pro-dis-hide"));
//   const removingFunction = function (entries) {
//     const [entry] = entries;
//     if (entry.isIntersecting) {
//       setInterval(function () {
//         workWithSections.forEach((el) => el.classList.remove("pro-dis-hide"));
//       }, 1000);
//     }
//   };
//   const removeProClass = new IntersectionObserver(removingFunction, {
//     root: null,
//     threshold: 0,
//   });
//   workWithSections.forEach((el) => removeProClass.observe(el));
// }
// fedInSections();

//PRODUCTS HEAD TRANSITION
function proHeadAnimation() {
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
}
proHeadAnimation();

//APPLICATION SLIDER FUNCTIONALLITY
const projectsSlider = document.querySelectorAll(".slide");
let curValue = 0;
let maxlength = clientsSlide.length;
let time = 3;
let secTime = 5;
let thirTime = 7;
function addTransformPropertyToSliders(sliders) {
  sliders.forEach(
    (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
  );
}
addTransformPropertyToSliders(clientsSlide);
addTransformPropertyToSliders(projectsSlider);

//CLIENTS ONLY

const activeDot = function (slide) {
  document
    .querySelectorAll(".dot")
    .forEach((el) => el.classList.remove("active-dot"));
  document
    .querySelector(`.dot[data-slide='${slide}']`)
    .classList.add("active-dot");
};

const slideSolution = function (slideCell, slideValue) {
  slideCell.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - slideValue)}%)`;
  });
};

function slideToRight(slide) {
  if (curValue === maxlength - 1) curValue = -1;
  curValue++;
  slideSolution(slide, curValue);
  activeDot(curValue);
}

function slideToLeft(slide) {
  if (curValue === 0) curValue = maxlength;
  curValue--;
  slideSolution(slide, curValue);
  activeDot(curValue);
}

// function autoSlide() {
//   setInterval(function () {
//     time--;
//     secTime--;
//     thirTime--;
//     if (time === 0) {
//       slideToRight(clientsSlide);
//     }
//     if (secTime === 0) {
//       slideToRight(clientsSlide);
//     }
//     if (thirTime === 0) {
//       slideToRight(clientsSlide);
//     }
//   }, 1000);
// }
// autoSlide();
btnRight.addEventListener("click", function () {
  slideToRight(clientsSlide);
});
btnLeft.addEventListener("click", function () {
  slideToLeft(clientsSlide);
});

btnImageRight.addEventListener("click", function () {
  slideToRight(projectsSlider);
});
btnImageLeft.addEventListener("click", function () {
  slideToLeft(projectsSlider);
});

clientsSlide.forEach((el, i) =>
  containerDots.insertAdjacentHTML(
    "beforeend",
    `<p class='dot' data-slide='${i}'></p>`
  )
);
containerDots.addEventListener("click", function (e) {
  if (!e.target.classList.contains("dot")) return alert("wrong");
  const { slide } = e.target.dataset;
  slideSolution(slide);
  activeDot(slide);
});
// projectsSlider.forEach((el, i) =>
//   imgDotsContainer.insertAdjacentHTML(
//     "beforeend",
//     `
//     <p class="dot-img" data-slider="${i}"></p>
// `
//   )
// );
// imgDotsContainer.addEventListener("click", function (e) {
//   if (!e.target.classList.contains("dot-img")) return;
//   const slider = e.target.dataset.slider;
//   slideSolution(slider);
// });
