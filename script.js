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
const clientsCell = document.querySelector(".clients");
const projectsCell = document.querySelector(".projects");
const projectsSlider = document.querySelectorAll(".slide");
const slideImages = document.querySelectorAll(".slide2");
const openNavBtn = document.querySelector(".open-menu");
const closeNavBtn = document.querySelector(".close-menu");
const RESPONSIVENAV = document.querySelector(".main-response-nav");
const dotsImgOnly = document.querySelector(".img-dots-only");
const slideImagesAllCell = document.querySelector(".slide-imgs-only");

const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const btnImageRight = document.querySelector(".img-right");
const btnImageLeft = document.querySelector(".img-left");
const startRequestBTN = document.querySelectorAll(".chech-input");
const slideResBtnRIGHT = document.querySelector(".work-plz");
const slideResBtnLEFT = document.querySelector(".work-plz-left");

let curValue = 0;
let maxlength = clientsSlide.length;
let imgLength = slideImages.length;

//CLIENT SLIDER TIMES
let time = 3;
let secTime = 5;
let thirTime = 7;
let forthTime = 9;

//PROJECT SLIDER TIMES
let proTime1 = 3;
let proTime2 = 5;
let proTime3 = 7;
let proTime4 = 9;

//PROJECT RESPONSIVE SLIDER TIMES
let imgValue = 0;
let restime1 = 3;
let restime2 = 5;
let restime3 = 7;
let restime4 = 9;
let restime5 = 11;
let restime6 = 13;
let restime7 = 15;
let restime8 = 17;
let restime9 = 19;
let restime10 = 21;
let restime11 = 13;
let restime12 = 25;
let restime13 = 27;

//SMOOTH SCROLLING FUNCTIONALLITY

startRequestBTN.forEach((btn) =>
  btn.addEventListener("click", function () {
    let value = heroInput.value;
    if (!value) return alert("Please input email.");
    console.log(value);
  })
);
function allAboutScrolling() {
  function workWithSmoothScrollings(target, classToScollTO) {
    if (target.classList.contains(classToScollTO)) {
      const id = target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  }
  navigationCell.addEventListener("click", function (e) {
    e.preventDefault();
    workWithSmoothScrollings(e.target, "working-link");
  });
  footerNav.addEventListener("click", (e) => {
    e.preventDefault();
    workWithSmoothScrollings(e.target);
  });
  RESPONSIVENAV.addEventListener("click", function (e) {
    e.preventDefault();
    workWithSmoothScrollings(e.target, "working-link");
    RESPONSIVENAV.classList.add("hidden-nav");
    closeNavBtn.style.display = "none";
    openNavBtn.style.display = "block";
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
function addTransformPropertyToSliders(sliders) {
  sliders.forEach(
    (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
  );
}
addTransformPropertyToSliders(clientsSlide);
addTransformPropertyToSliders(projectsSlider);

//CLIENTS ONLY
const activeDot = function (classes, slide, slidesType, classToAdd) {
  document
    .querySelectorAll(classes)
    .forEach((el) => el.classList.remove("active-dot"));
  document
    .querySelector(`${classToAdd}[data-${slidesType}='${slide}']`)
    .classList.add("active-dot");
};

const slideSolution = function (slideCell, slideValue) {
  slideCell.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - slideValue)}%)`;
  });
};

function slideToRight(slide, classToRemove, slideTYPE, addClassALL) {
  if (curValue === maxlength - 1) curValue = -1;
  curValue++;
  slideSolution(slide, curValue);
  activeDot(classToRemove, curValue, slideTYPE, addClassALL);
}

function slideToLeft(slide, classToRemove, slideTYPE, addClassALL) {
  if (curValue === 0) curValue = maxlength;
  curValue--;
  slideSolution(slide, curValue);
  activeDot(classToRemove, curValue, slideTYPE, addClassALL);
}

function clientsAutoSlide() {
  setInterval(function () {
    time--;
    secTime--;
    thirTime--;
    forthTime--;
    if (time === 0) {
      slideToRight(clientsSlide, ".dot", "slide", ".dot");
    }
    if (secTime === 0) {
      slideToRight(clientsSlide, ".dot", "slide", ".dot");
    }
    if (thirTime === 0) {
      slideToRight(clientsSlide, ".dot", "slide", ".dot");
    }
    if (forthTime === 0) {
      slideToRight(clientsSlide, ".dot", "slide", ".dot");
    }
  }, 1000);
}

function projectsAutoSlider() {
  setInterval(function () {
    proTime1--;
    proTime2--;
    proTime3--;
    proTime4--;
    if (proTime1 === 0)
      slideToRight(projectsSlider, ".dot-img", "slider", ".dot-img");
    if (proTime2 === 0)
      slideToRight(projectsSlider, ".dot-img", "slider", ".dot-img");
    if (proTime3 === 0)
      slideToRight(projectsSlider, ".dot-img", "slider", ".dot-img");
    if (proTime4 === 0)
      slideToRight(projectsSlider, ".dot-img", "slider", ".dot-img");
  }, 1000);
}

btnRight.addEventListener("click", function () {
  slideToRight(clientsSlide, ".dot", "slide", ".dot");
});
btnLeft.addEventListener("click", function () {
  slideToLeft(clientsSlide, ".dot", "slide", ".dot");
});

//PROJECTS SECTION
projectsSlider.forEach((el, i) =>
  imgDotsContainer.insertAdjacentHTML(
    "beforeend",
    `
    <p class="dot-img" data-slider="${i}"></p>
`
  )
);

function clickEventsOfTheImgSlidesSections() {
  imgDotsContainer.addEventListener("click", function (e) {
    if (!e.target.classList.contains("dot-img")) return;
    const slider = e.target.dataset.slider;
    slideSolution(projectsSlider, slider);
    activeDot(".dot-img", slider);
  });

  btnImageRight.addEventListener("click", function () {
    slideToRight(projectsSlider, ".dot-img", "slider", ".dot-img");
  });
  btnImageLeft.addEventListener("click", function () {
    slideToRight(projectsSlider, ".dot-img", "slider", ".dot-img");
  });

  clientsSlide.forEach((el, i) =>
    containerDots.insertAdjacentHTML(
      "beforeend",
      `<p class='dot' data-slide='${i}'></p>`
    )
  );
  containerDots.addEventListener("click", function (e) {
    if (!e.target.classList.contains("dot")) return alert("wrong");
    const slide = e.target.dataset.slide;
    slideSolution(clientsSlide, slide);
    activeDot(".dot", slide);
  });
}
clickEventsOfTheImgSlidesSections();
function clientObserver() {
  const clientSlideObserver = new IntersectionObserver(
    function (entries) {
      const [entry] = entries;
      if (entry.isIntersecting) clientsAutoSlide();
    },
    {
      root: null,
      threshold: 0,
    }
  );
  clientSlideObserver.observe(clientsCell);
}
clientObserver();
function projectsObserver() {
  const projectsCellObserver = new IntersectionObserver(
    function (entries) {
      const [entry] = entries;
      if (entry.isIntersecting) projectsAutoSlider();
    },
    {
      root: null,
      threshold: 0,
    }
  );
  projectsCellObserver.observe(projectsCell);
}
projectsObserver();
//THE RESPONSIVE NAVIGATION FUNCTIONALLITY
function AllABOUTNavResponsive() {
  function workWithResNav(addStyle, RemoveStyle) {
    addStyle.style.display = "block";
    RemoveStyle.style.display = "none";
  }
  openNavBtn.addEventListener("click", function () {
    RESPONSIVENAV.classList.remove("hidden-nav");
    workWithResNav(closeNavBtn, openNavBtn);
  });
  closeNavBtn.addEventListener("click", function () {
    RESPONSIVENAV.classList.add("hidden-nav");
    workWithResNav(openNavBtn, closeNavBtn);
  });
}
AllABOUTNavResponsive();

//WORKING WITH RESPONSIVE IMAGES
slideImages.forEach((el, i) =>
  dotsImgOnly.insertAdjacentHTML(
    "beforeend",
    `
    <p class="dot-img-only" data-slides="${i}"></p>
  `
  )
);

document.querySelectorAll(".dot-img-only")[0].classList.add("active-dot");
function dotsActivating(slide) {
  document
    .querySelectorAll(".dot-img-only")
    .forEach((el) => el.classList.remove("active-dot"));
  document
    .querySelector(`.dot-img-only[data-slides='${slide}']`)
    .classList.add("active-dot");
}

slideImages.forEach(
  (img, i) => (img.style.transform = `translateX(${i * 100}%)`)
);

function resSlideSolution(slideValue) {
  slideImages.forEach(
    (img, i) => (img.style.transform = `translateX(${100 * (i - slideValue)}%)`)
  );
}

function resSlideRight() {
  if (imgValue === imgLength - 1) imgValue = -1;
  imgValue++;
  resSlideSolution(imgValue);
  dotsActivating(imgValue);
}
function resSlideLeft() {
  if (imgValue === 0) imgValue = imgLength;
  imgValue--;
  resSlideSolution(imgValue);
  dotsActivating(imgValue);
}
function clickedDot() {
  dotsImgOnly.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot-img-only")) {
      const slides = e.target.dataset.slides;
      resSlideSolution(slides);
      dotsActivating(slides);
    }
  });
}
clickedDot();
slideResBtnRIGHT.addEventListener("click", resSlideRight);
slideResBtnLEFT.addEventListener("click", resSlideLeft);
function resAutoSlide() {
  setInterval(function () {
    restime1--;
    restime2--;
    restime3--;
    restime4--;
    restime5--;
    restime6--;
    restime7--;
    restime8--;
    restime9--;
    restime10--;
    restime11--;
    restime12--;
    restime13--;
    if (restime1 === 0) resSlideRight();
    if (restime2 === 0) resSlideRight();
    if (restime3 === 0) resSlideRight();
    if (restime4 === 0) resSlideRight();
    if (restime5 === 0) resSlideRight();
    if (restime6 === 0) resSlideRight();
    if (restime7 === 0) resSlideRight();
    if (restime8 === 0) resSlideRight();
    if (restime9 === 0) resSlideRight();
    if (restime10 === 0) resSlideRight();
    if (restime11 === 0) resSlideRight();
    if (restime12 === 0) resSlideRight();
    if (restime13 === 0) resSlideRight();
  }, 1000);
}
const resImgSlideObs = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) resAutoSlide();
  },
  {
    root: null,
    threshold: 0,
  }
);
resImgSlideObs.observe(slideImagesAllCell);
