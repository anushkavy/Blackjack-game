// let age = 100;
// if (age < 100) {
//   console.log("Not eligible");
// } else if (age === 100) {
//   console.log("Here's your card from the king!");
// } else {
//   console.log("Not eligible, you have already gotten a card.");
// }

let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "Anushka",
  chips: 200,
};

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ":  $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Oops, you missed it! Do you want to draw another card?";
  } else if (sum === 21) {
    message = "Wohooo, you hit the jackpot!";
    hasBlackJack = true;
  } else {
    message = "Uh-oh, you are out of the game.";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let drawCard = getRandomCard();
    sum += drawCard;
    cards.push(drawCard);
    renderGame();
    // cardsEl.textContent += drawCard;
  } else {
    console.log("Sorry, the game has ended now.");
  }
}
