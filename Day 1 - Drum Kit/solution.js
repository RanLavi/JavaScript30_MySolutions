// Removing key from class 'playing', change design back
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Not transformed, no reason to remove class 'playing'
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Assign the audio that relates to the data-key
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // Assign the div that relates to the data-key
    if (!audio) return; // No valid data-key

    key.classList.add('playing'); // Add key to class 'playing' for CSS design
    audio.currentTime = 0; // Rewind audio file to the start
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key')); // Select all keys and put them in an array
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // Removing key from class 'playing', change design back
  window.addEventListener('keydown', playSound);; 