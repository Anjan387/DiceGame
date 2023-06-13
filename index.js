var newRandomNumber1 = Math.floor(Math.random()* 6 + 1);
var randomDiceImage = "dice" + newRandomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage ;

var image1 = document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource);

var newRandomNumber2 = Math.floor(Math.random()* 6 + 1);
var randomDiceImage2 = "dice" + newRandomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2 ;

var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);



if (newRandomNumber1>newRandomNumber2){
   document.querySelector("h1").innerHTML ="🚩 Player 1 Wins!"
}
else if(newRandomNumber2>newRandomNumber1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins! "
}
else{
    document.querySelector("h1").innerHTML = "🚩 Draw! "
}