const wordEl = document.getElementById('word');
const wrongLetterEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

// set hard the words
const words = [
  'application',
  'programming',
  'interface',
  'wizard',
  'guitar',
  'gtxm',
  'maria me ta kitrina',
];

// pick a random word
let selectedWord = words[Math.floor(Math.random() * words.length)];

// store the correct letters
const correctLetters = [];
// store the wrong letters
const wrongLetters = [];

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(letter => {
        if (letter === ' ') {
          return '<span class="space"></span>';
        } else {
          return `<span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
        </span>`;
        }
      })
      .join('')}`;

  // Put all letters in one line
  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord.replace(/\s/g, '')) {
    finalMessage.innerText = 'Congratulations! You won! 😃';
    //  show the popup
    popup.style.display = 'flex';
  }
}

// Update the wrong letters
function updateWrongLettersEl() {
  // Display wrong letters
  wrongLetterEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

  // Display parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  // Check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = 'Unfortunately you lost. 😕';
    popup.style.display = 'flex';
  }
}

// Show notification
function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

// Keydown letter press
window.addEventListener('keydown', e => {
  //   console.log(e.keyCode);
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    // if the letter is the selected word
    if (selectedWord.includes(letter)) {
      // check if letter already exist in correctLetters[]
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      } else {
        // if letter already exist show this function
        showNotification();
      }
    }
    // else push thw letter into wrongLetters[]
    else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        // display it's a wrong letter
        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

// Restart game and play again
playAgainBtn.addEventListener('click', () => {
  // Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLettersEl();

  popup.style.display = 'none';
});

displayWord();
