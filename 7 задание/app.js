

function checkGuess() {
const guess = parseInt(document.getElementById('guessInput').value);
const resultText = document.getElementById('result');
var secretNumber = Math.floor(Math.random() * 10) + 1;
if (guess === secretNumber) {
            resultText.textContent = `Поздравляем! Вы угадали число ${secretNumber}!`;
} else {
resultText.textContent = `Неправильно. Попробуйте еще раз.`;
    } 
}