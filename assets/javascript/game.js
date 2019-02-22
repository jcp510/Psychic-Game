/* Variables to hold number of wins, losses, guesses left, guesses so far, and
possible guess choices. */
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = " ";
var letterChoices = "abcdefghijklmnopqrstuvwxyz";

// Variables referencing where wins, losses, and guesses will be displayed in html.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesSoFarText = document.getElementById("guesses-so-far-text");

// This function runs when user presses a key.
document.onkeyup = function(event) {
  // Captures user guess.
  var userGuess = event.key;

  // App randomly chooses a character from a-z.
  var appGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

  // Display result of user guess.
  if (userGuess === appGuess) {
    wins++;
    winsText.textContent = "Wins: " + wins;
    guessesLeft = 10;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesSoFar = " ";
    guessesSoFarText.textContent = "Your guesses so far: ";
  } else {
    guessesLeft--;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    guessesSoFar = guessesSoFar.concat(userGuess, ", ");
    guessesSoFarText.textContent = "Your guesses so far: " + guessesSoFar;
  };

  if (guessesLeft === 0) {
      losses++;
      lossesText.textContent = "Losses: " + losses;
      guessesLeft = 10;
      guessesLeftText.textContent = "Guesses left: " + guessesLeft;
      guessesSoFar = " ";
      guessesSoFarText.textContent = "Your guesses so far: " + guessesSoFar;
    };
};