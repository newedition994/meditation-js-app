const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");

  // Sounds
  const sounds = document.querySelectorAll(".sound-picker button");

  // Time Display
  const tiemDisplay = document.querySelector(".time-display");
  const timeSelect = document.querySelectorAll(".time-select button");

  // Get length of the outline
  const outlineLength = outline.getTotalLength();

  // Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  // play sound
  play.addEventListener("click", () => {
    checkPlaying(song);
  });

  // selecting sound
  timeSelect.forEach(option => {
    option.addEventListener("click", function() {
      fakeDuration = this.getAttribute("data-time");
      tiemDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
        fakeDuration % 60
      )}`;
    });
  });

  // function to pause and play the sound
  const checkPlaying = song => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    } else {
      song.pause();
      video.pause();
      play.src = "./svg/play.svg";
    }
  };

  // Animate the cirle and check time
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elasped = fakeDuration - currentTime;
    let seconds = Math.floor(elasped % 60);
    let minutes = Math.floor(elasped / 60);

    // Animate the circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    // Animate the time
    tiemDisplay.textContent = `${minutes}:${seconds}`;
  };
};

app();
