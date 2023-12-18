`use strict`;

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
const allHands = document.querySelectorAll(".hand");
const digitalTime = document.querySelector(".digital-time");
const tickingSound = document.querySelector(".clock-ticking");

const formatTime = (t) => {
  if (t < 10) {
    t = "0" + t;
  }
  return t;
};

const setDate = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursDegrees = (hours / 12) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const secondsDegrees = (seconds / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(
    ${secondsDegrees}deg
  )`;

  if (secondsDegrees === 90) {
    allHands.forEach((hand) => (hand.style.transition = "none"));

    tickingSound.pause();
  } else {
    allHands.forEach((hand) => (hand.style.transition = ""));

    tickingSound.play();
  }

  digitalTime.innerHTML = `${formatTime(hours)} : ${formatTime(
    minutes
  )} : ${formatTime(seconds)}`;
};

setInterval(setDate, 1000);
