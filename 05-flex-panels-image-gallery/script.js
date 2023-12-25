"use strict";
const panels = document.querySelectorAll(".panel");

const toggleOpen = function () {
  this.classList.toggle("open");
};

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

const toggleActive = function (e) {
  if (e.propertyName === "flex-grow") {
    this.classList.toggle("open-active");
  }
};

panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
