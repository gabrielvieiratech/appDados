const IMAGES_DIRECTORY = './images/';
const diceImg1 = document.querySelector('.dice1 img');
const diceImg2 = document.querySelector('.dice2 img');
const res = document.querySelector('.h1');
const btn = document.querySelector('.btn');

function generateRandomNumber() {
    return Math.floor(Math.random() * 6 + 1);
}

function setDiceImage(element, diceNumber) {
    const imagePath = `${IMAGES_DIRECTORY}dice${diceNumber}.png`;
    element.setAttribute('src', imagePath);
}

function determineWinner(roll1, roll2) {
    if (roll1 > roll2) {
        displayWinnerMessage('O jogador 1 ganhou 🏆!');
    } else if (roll1 < roll2) {
        displayWinnerMessage('O jogador 2 ganhou 🏆!');
    } else {
        displayTieMessage('Deu empate 🤷‍♂️!');
    }
}

function displayWinnerMessage(message) {
    res.innerHTML = message;
}

function displayTieMessage(message) {
    res.innerHTML = message;
}

btn.addEventListener('click', function () {
    const player1Roll = generateRandomNumber();
    const player2Roll = generateRandomNumber();

    setDiceImage(diceImg1, player1Roll);
    setDiceImage(diceImg2, player2Roll);

    determineWinner(player1Roll, player2Roll);
});
