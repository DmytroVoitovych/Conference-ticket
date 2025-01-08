import { ticketId as id } from "./elements.js";

const inputBlockAnimation = anime({
  targets: ".formInput-block",
  opacity: [1, 0],
  easing: "easeInOutSine",
  delay: anime.stagger(31),
  duration: 800,
  autoplay: false,
});

const inputBlockAnimationOfEven = anime({
  targets: ".formInput-block:nth-child(even)",
  translateX: ["0vw", "100vw"],
  easing: "easeInOutSine",
  delay: anime.stagger(125),
  autoplay: false,
});

const inputBlockAnimationOfOdd = anime({
  targets: ".formInput-block:nth-child(odd)",
  translateX: ["-100vw", "0vw"],
  direction: "reverse",
  easing: "easeInOutSine",
  delay: anime.stagger(125),
  autoplay: false,
});

const inputSubmit = anime({
  targets: ".formBtn-generate",
  translateY: ["0vh", "100vh"],
  opacity: [1, 0],
  easing: "easeInOutSine",
  delay: 250,
  autoplay: false,
});

const ticketDescriptionBlock = anime({
  targets: ".ticketDescription-block",
  translateY: ["-100vh", "0vh"],
  opacity: [0, 1],
  easing: "easeInOutSine",
  delay: 1000,
  duration: 250,
});

const ticketBlock = anime({
  targets: ".ticketBlock",
  backgroundPosition: {
    value: ["600px 300px", "0px 0px"],
    delay: 1150,
    duration: 350,
  },
  top: ["300px", "0px"],
  left: ["600px", "0px"],
  easing: "easeInOutSine",
  delay: 700,
  duration: 350,
});

export const arrOfInputAnimEls = [
  inputBlockAnimation,
  inputBlockAnimationOfEven,
  inputBlockAnimationOfOdd,
  inputSubmit,
  ticketDescriptionBlock,
  ticketBlock,
];
//
