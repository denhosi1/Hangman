const puzzleElement = document.querySelector("#puzzle");
const remainingGuessesElement = document.querySelector("#remaining-guesses");
let game1;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleElement.innerHTML = "";
  remainingGuessesElement.textContent = game1.statusMessage;

  game1.puzzle.split("").forEach(letter => {
    const el = document.createElement("span");
    el.textContent = letter;
    puzzleElement.append(el);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle(2);
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
