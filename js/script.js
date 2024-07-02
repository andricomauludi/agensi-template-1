// script.js

document.addEventListener("DOMContentLoaded", function () {
  const fadeElems = document.querySelectorAll(".fade-in");
  const slideLeftElems = document.querySelectorAll(".slide-in-left");
  const scaleElems = document.querySelectorAll(".scale-in");

  function checkPosition() {
    checkFade();
    checkSlideLeft();
    checkScale();
  }

  function checkFade() {
    fadeElems.forEach(function (elem) {
      const position = elem.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight * 0.75) {
        elem.classList.add("active");
      }
    });
  }

  function checkSlideLeft() {
    slideLeftElems.forEach(function (elem) {
      const position = elem.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight * 0.75) {
        elem.classList.add("active");
      }
    });
  }

  function checkScale() {
    scaleElems.forEach(function (elem) {
      const position = elem.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight * 0.75) {
        elem.classList.add("active");
      }
    });
  }

  // Initial check
  checkPosition();

  // Scroll event listener
  window.addEventListener("scroll", checkPosition);
});
