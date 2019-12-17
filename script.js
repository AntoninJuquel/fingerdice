//On lance les dés
var dice1 = Math.floor((Math.random()*6)+1);
var dice2 = Math.floor((Math.random()*6)+1);

//On attibue les images
var randomDiceImage1 = "images/dice" + dice1 + ".png";
var randomDiceImage2 = "images/dice" + dice2 + ".png";

//DOM select image
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

//Changement des images
image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src", randomDiceImage2);

if(dice1===dice2){ //if its a draw
  document.querySelector("h1").textContent = "Draw !";
}else if(dice1>dice2){ //if player 1 wins
  document.querySelector("h1").textContent = "👉 Player 1 won";
}else if(dice2>dice1) { //if player 2 wins
  document.querySelector("h1").textContent = "Player 2 won 👈";
}
