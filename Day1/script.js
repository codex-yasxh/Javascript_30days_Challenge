// Select all the keys
const keys = document.querySelectorAll(".key");

// Play sound when key pressed or button clicked
function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return; // stop if no matching sound

  audio.currentTime = 0; // rewind to start so it can retrigger
  audio.play();

  key.classList.add("playing");
}

// Remove animation after it finishes
function removeTransition(e) {
  if (e.propertyName !== "transform") return; // only catch transform
  this.classList.remove("playing");
}

// 1. Listen for key presses
window.addEventListener("keydown", (e) => {
  playSound(e.keyCode);
});

// 2. Listen for button clicks
keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyCode = key.getAttribute("data-key");
    playSound(keyCode);
  });

  // remove animation after transition
  key.addEventListener("transitionend", removeTransition);
});
