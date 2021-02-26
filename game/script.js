'use strict';

// Variables declarations
let score1player = document.querySelector('#score--0');
let score2player = document.getElementById('score--1');
let current1score = document.querySelector('#current--0');
let current2score = document.querySelector('#current--1');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let totalScore = [0, 0];
let dice = document.querySelector('.dice');
let currentScore = 0;
let activePlayer = 0;
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');

// Initial Set Score and dice condition
score1player.textContent = 0;
score2player.textContent = 0;
dice.classList.add('hidden');
let playing = true;

// Dice Roll Functionality and sitch player logic
btnRoll.addEventListener('click', function () {
  if (playing) {
    document.querySelector('.dice').classList.remove('hidden');
    let numGenerate = Math.trunc(Math.random() * 6) + 1;
    currentScore += numGenerate;

    // Check if dice number is not 1
    if (numGenerate !== 1) {
      let imgSet = document
        .querySelector('.dice')
        .setAttribute('src', `dice-${numGenerate}.png`);
      document.querySelector(
        `#current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to another player
      let imgSet = document
        .querySelector('.dice')
        .setAttribute('src', `dice-${numGenerate}.png`);
      console.log(activePlayer);
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      currentScore = 0;
      activePlayer = Number(!activePlayer);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    }
  }
});

// Add Button Hold Functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    let scoredval = Number(
      document.querySelector(`#score--${activePlayer}`).textContent
    );
    document.querySelector(`#score--${activePlayer}`).textContent =
      scoredval + currentScore;
    let finalScore = Number(
      document.querySelector(`#score--${activePlayer}`).textContent
    );
    if (finalScore >= 50) {
      playing = false;
      document.querySelector('.dice').classList.remove('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      dice.classList.add('hidden');
    } else {
      playing = true;
      document.querySelector(`#current--${activePlayer}`).textContent = 0;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      currentScore = 0;
      activePlayer = Number(!activePlayer);

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
      currentScore = 0;
    }
  }
});

// adding reset functionality
btnNew.addEventListener('click', function () {
  playing = true;
  score1player.textContent = 0;
  score2player.textContent = 0;
  currentScore = 0;
  dice.classList.add('hidden');
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
