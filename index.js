// Dice 1 

var randNumber1 = Math.random();
randNumber1 = randNumber1 * 6;
randNumber1 = Math.floor(randNumber1) + 1; 


var randsrc = "dice" + randNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randsrc);

///////////////////////////////////////////////////////////////////////////

// Dice 2

var randNumber2 = Math.random();
randNumber2 = randNumber2 * 6;
randNumber2 = Math.floor(randNumber2) + 1; 


var randsrc2 = "dice" + randNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randsrc2);

if (randNumber1 > randNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randNumber2 > randNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}