'use strict';

// let msgTxt = document.querySelector('.message').textContent;
// console.log(msgTxt);

// document.querySelector('.message').textContent = 'Correct Number (Congrats)';
// // document is actually an entry point to the HTML document object!

// const selectedNum = document.querySelector('.number');
// const score = document.querySelector('.score');

// selectedNum.textContent = 13;
// selectedNum.textContent = 30;

// const guess = document.querySelector('.guess');
// // console.log(guess.value);
// // guess.value = 23;

// // Event Listener
// const button = document.querySelector('.check');
// button.addEventListener(
//   'click',
//   // event handler
//   () => {
//     console.log(guess.value);
//   }
// );

// Game state
const LOWEST_NUM = 1;
const HIGHEST_NUM = 100;

const generate_initial_state = () => ({
  score: 20,
  high_score: 0,
  random_num: Math.ceil(
    Math.random() * (HIGHEST_NUM - LOWEST_NUM) + LOWEST_NUM
  ),
  game_won: false,
});

let game_state = generate_initial_state();

// select from DOM
const check_button = document.querySelector('.check');
const again_button = document.querySelector('.again');
const hidden_number = document.querySelector('header .number');
const textMsg = document.querySelector('main .message');
const highScoreDOM = document.querySelector('.highscore');
const scoreDOM = document.querySelector('.score');
const bodyDOM = document.querySelector('body');

const check_guess = () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log('Guess', guess);
  // If there's no value, skip; notice that logic breaks if guessing 0 is allowed!
  if (!guess) {
    return;
  }
  if (guess === game_state.random_num) {
    // Win the game
    game_state.game_won = true;
    hidden_number.textContent = game_state.random_num;
    textMsg.textContent = '🥳 Correct Number!';
    bodyDOM.style.backgroundColor = 'GreenYellow';
    if (game_state.score > game_state.high_score) {
      game_state.high_score = game_state.score;
      highScoreDOM.textContent = game_state.high_score;
    }
  } else if (!game_state.game_won) {
    game_state.score -= 1;
    scoreDOM.textContent = game_state.score;
    textMsg.textContent =
      guess < game_state.random_num ? 'Guess too low!' : 'Guess too high!';
  }
};

const resetGame = () => {
  const currentHighscore = game_state.high_score;
  game_state = generate_initial_state();
  game_state.high_score = currentHighscore;
  bodyDOM.style.backgroundColor = '#222';
  scoreDOM.textContent = game_state.score;
  hidden_number.textContent = '?';
  textMsg.textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
};

check_button.addEventListener('click', check_guess);
again_button.addEventListener('click', resetGame);
