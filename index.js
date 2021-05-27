var ramdonNum1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice" + ramdonNum1 + ".png");
var ramdonNum2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice" + ramdonNum2 + ".png");

if (ramdonNum1 === ramdonNum2) {
        document.querySelector("h1").innerHTML = "Draw, Roll Dice Again";
    }
    else if (ramdonNum1 < ramdonNum2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }

    else {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }

    setTimeout(function(){
      document.querySelector("h1").innerHTML = "Refresh me!";
    }, 5000);
