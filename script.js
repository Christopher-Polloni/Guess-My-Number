"use strict";

let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage('No Number Provided!');
  } 
  else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber;
    
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
  } 
  else if (guess !== secretNumber){
    if (guess < 1 || guess > 20 ){
      displayMessage('Guess must be from 1-20!')
    }
    if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
        document.querySelector('.message').textContent = guess > secretNumber ? "Too high!" : "Too low!";
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        score--;
        document.querySelector('.message').textContent = "You lost the game!";
        document.querySelector('.number').textContent = secretNumber;
      }
  }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20);

   displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
})