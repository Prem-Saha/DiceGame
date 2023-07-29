//first dice
var randomNumber1 = Math.floor((Math.random() * 6) + 1 );
var firstDice = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",firstDice);

//second dice
var randomNumber2 = Math.floor((Math.random() * 6) + 1 );
var secondDice = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",secondDice);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
