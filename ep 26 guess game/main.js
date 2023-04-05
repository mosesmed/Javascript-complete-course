'use strict';

let highscore = 0;
let trial = 10;
let theNumber = Math.trunc(Math.random() * 10) + 1;
console.log(theNumber);

document.querySelector(".play").addEventListener("click", function (){
    let guess = Number(document.querySelector(".guess").value);

    //guess field is empty
    if(!guess){
        document.querySelector(".heading").textContent = "Input A Num";
    }
    
    //guess is wrong and higher
    else if(guess > theNumber){
        if(trial > 1){
            document.querySelector(".heading").textContent = "Guess Too High";
            trial--
            document.querySelector(".trial").textContent = trial;
        }else{
            document.querySelector(".heading").textContent = "You Loose!!!";
            trial = 0
            document.querySelector(".trial").textContent = trial;
            document.querySelector("body").style.backgroundColor = "#a90000";
            document.querySelector('.guess').style.pointerEvents = 'none';
        }
        
    }
    
    //guess is wrong and less
    else if(guess < theNumber){
        if(trial > 1){
            document.querySelector(".heading").textContent = "Guess Too Low";
            trial--
            document.querySelector(".trial").textContent = trial;
        }else{
            document.querySelector(".heading").textContent = "You Loose!!!";
            trial = 0
            document.querySelector(".trial").textContent = trial;
            document.querySelector("body").style.backgroundColor = "#a90000";
            document.querySelector('.guess').style.pointerEvents = 'none';
        }
        
    }
    
    //if guess is correct
    else if(guess === theNumber){
        if(trial > highscore){
            highscore = trial;
            document.querySelector(".highscore").textContent = trial;
        }else{
            highscore = highscore;
            document.querySelector(".highscore").textContent = highscore;
        }
        
        document.querySelector(".number").textContent = theNumber;

        document.querySelector(".heading").textContent = "You Win!!!";

        document.querySelector("body").style.backgroundColor = "#188351";
        document.querySelector('.guess').style.pointerEvents = 'none';
    }
})

//reset
document.querySelector('.reset').addEventListener('click', function(){
    highscore = 0
    trial = 10
    theNumber = Math.trunc(Math.random() * 10) + 1;
    console.log(theNumber);

    document.querySelector("body").style.backgroundColor = "rgb(28, 27, 27)";

    document.querySelector(".highscore").textContent = highscore;
    document.querySelector(".trial").textContent = trial;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".heading").textContent = "Play game";
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').style.pointerEvents = 'visible';

});

//continue
document.querySelector('.continue').addEventListener('click', function(){
    if(trial > highscore){
        highscore = trial;
        document.querySelector(".highscore").textContent = trial;
    }else{
        highscore = highscore;
        document.querySelector(".highscore").textContent = highscore;
    }

    trial = 10
    theNumber = Math.trunc(Math.random() * 10) + 1;
    console.log(theNumber);

    document.querySelector("body").style.backgroundColor = "rgb(28, 27, 27)";

    document.querySelector(".trial").textContent = trial;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".heading").textContent = "Play game";
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').style.pointerEvents = 'visible';

});