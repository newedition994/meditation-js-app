const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");

  // Sounds
  const sounds = document.querySelectorAll(".sound-picker button");

  // Time Display
  const tiemDisplay = document.querySelector(".time-display");

  // Get length of the outline
  const outlineLength = outline.getTotalLength();

  // Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  // play sound
  play.addEventListener("click", () => {});
};

app();
