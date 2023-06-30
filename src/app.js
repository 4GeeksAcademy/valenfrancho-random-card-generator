/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function randomSuit() {
    let icons = ["♦", "♥", "♠", "♣"];
    let suitSelector = Math.floor(Math.random() * icons.length);

    return icons[suitSelector];
  }

  function randomRank() {
    let numbers = [
      "A",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let rankSelector = Math.floor(Math.random() * numbers.length);

    return numbers[rankSelector];
  }

  function redCard() {
    let cardSuit = document.querySelectorAll(".internalIcon");
    let cardNumbers = document.querySelectorAll(".numberText");

    let suitIsRed =
      cardSuit[0].innerHTML === "♦" || cardSuit[0].innerHTML === "♥";

    cardSuit.forEach(element => {
      if (suitIsRed) {
        element.style.color = "red";
      } else {
        element.style.color = "";
      }
    });

    cardNumbers.forEach(element => {
      if (suitIsRed) {
        element.style.color = "red";
      } else {
        element.style.color = "";
      }
    });

    return cardSuit;
  }

  let finalSuit = randomSuit();

  let cardSuit = document.querySelectorAll(".internalIcon");
  cardSuit.forEach(item => {
    item.innerHTML = finalSuit;
  });

  let finalRank = randomRank();

  let cardRank = document.querySelectorAll(".numberText");
  cardRank.forEach(item => {
    item.innerHTML = finalRank;
  });

  let selectRedCard = redCard();

  function dealCard() {
    let finalSuit = randomSuit();
    let cardSuit = document.querySelectorAll(".internalIcon");
    cardSuit.forEach(item => {
      item.innerHTML = finalSuit;
    });
    let finalRank = randomRank();

    let cardRank = document.querySelectorAll(".numberText");
    cardRank.forEach(item => {
      item.innerHTML = finalRank;
    });

    let selectRedCard = redCard();
  }

  let dealButton = document.querySelector("#button");
  dealButton.textContent = "DEAL";

  dealButton.addEventListener("click", dealCard);
};
