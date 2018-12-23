// Grab everything on the page with class 'key'
const keys = Array.from(document.querySelectorAll('.key'));

// Add event listener to every item in the 'keys' NodeList. This function will be called at transition end.
keys.forEach(key => key.addEventListener('transitionend', stopSound));

// Listen for 'keydown' event and play the sound associated with the pressed key
window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // Rewind to start before playing. This allows us to hit the same key multiple times in quick succession.
  audio.currentTime = 0;
  audio.play();

  // If there's no sound associated with the keypress, don't do anything
  if (!audio) return;

  // Otherwise add class of 'playing'
  key.classList.add('playing');
}

function stopSound() {
  this.classList.remove('playing');
  console.log(this);
  
}

// 
// 
// Learnings
// 
// 

// 1) Array.from to create an array from an array-like list of objects
// 2) Attribute selector within JS (similar to CSS syntax) e.g. document.querySelector(`audio[data-key="65"]`); will select an audio element with the 'data-key' attribute whose value = 65.
// 3) 'this' keyword