"use strict";

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // return if there is no audio corresponding to the click
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  // add playing class on clicked key
  key.classList.add("playing");
};

const playSoundOnClick = function () {
  keys.forEach((key) => {
    key.addEventListener("click", function () {
      if (!this) return;

      // select the audio and key based on click
      const audio = document.querySelector(
        `audio[data-key="${this.dataset.key}"]`
      );
      const key = document.querySelector(
        `.key[data-key="${this.dataset.key}"]`
      );

      if (!audio) return;

      audio.currentTime = 0;
      audio.play();

      // add playing class on clicked key
      key.classList.add("playing");
    });
  });
};

// remove playing class after the transition is over
const removeTransition = function (e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);
window.addEventListener("click", playSoundOnClick);
