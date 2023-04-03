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
        }
        
    }
    
    //if guess is correct
    else if(guess === theNumber){
        highscore = trial;
        document.querySelector(".number").textContent = theNumber;

        document.querySelector(".heading").textContent = "You Win!!!";

        document.querySelector("body").style.backgroundColor = "#188351";

        document.querySelector(".highscore").textContent = highscore;
    }
})