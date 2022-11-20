let randomNum1=Math.floor(Math.random()*6+1);
let randomImage="images/dice"+randomNum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage);
let randomNum2=Math.floor(Math.random()*6+1);
let randomImage2="images/dice"+randomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
if (randomNum1>randomNum2) {
    document.querySelector("h1").innerHTML="Player1 Win🏆";
}
else if (randomNum1<randomNum2) {
    document.querySelector("h1").innerHTML="🏆Player2 Win!"
}
else{
    document.querySelector("h1").innerHTML="Match Draw, play again !";    
}