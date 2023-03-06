'user strict';

/* 

1. If you start a business with $1000 and the business closes down on a loss of $800, what is the business percentage loss

2. Mark and John invests 200 USD and 100 USD respectively in a business. The business promises to bring an ROI of 30% every month.
-- If John compounds his interest every month, how much will he have in ROI and how much will he have in total at the end of 10 months
-- If Mark compounds his interest for five months, how much would he have gained.
-- Based on your results, who gained more money. Print your answer using an if else statement
-- Compound Interest formula = P(1+r)^n - P

3. These are the results of two college students for 3 terms
-- Lucy 55 48 57
-- Lumy 21 80 41

* If the minimum requirement is 60 calculate individual scores base on the average of the three terms
* Compare their results and determine who'll repeat the class or move to the next

4. Build a simple todo reminder for Jack who wants to know which color of clothe to wear to work everyday of the week based on his work rules
-- Monday -- blue
-- Tuesday -- whine
-- Wednesday -- black
-- Thursday -- Olive Green
-- Friday -- Cream
*/

//question one
let perLoss = (800/1000)*100;
console.log("The percentage loss is" + " " + perLoss + "%");

//question two
let totalAmt = 100*(1+0.3)**10;
let roi = totalAmt - 100;
console.log(`John ROI at the end of ten month is ${roi} and total amount is ${totalAmt}`);

let john = totalAmt;

totalAmt = 200*(1+0.3)**5;
roi = totalAmt - 200;
console.log(`Mark ROI at the end of five month is ${roi} and total amount is ${totalAmt}`);

let mark = totalAmt;

if(john > mark){
    console.log("John made more money");
}else{
    console.log("Mark made more money");
}


//question 3
let lucy = (55+48+57)/3;
let lumy = (21+80+41)/3;
console.log(`Lucy scored ${lucy} and Lumy scored ${lumy}`);

if(lumy >= 60 || lucy >= 60){
    console.log("Lumy and Lucy passed");
}else if(lumy >= 60 && lucy < 60){
    console.log("Lumy passed and Lucy failed")
}else if(lumy < 60 && lucy >= 60){
    console.log("Lumy failed and Lucy passed");
}else{
    console.log("Lumy and Lucy failed");
}

//question four
let day = prompt("What day is it");
    day = day.toUpperCase();

switch (day) {
    case 'MONDAY':
        console.log("blue");
        break;
    case 'TUESDAY':
        console.log("whine");
        break;
    case 'WEDNESDAY':
        console.log("black");
        break;
    case 'THURSDAY':
        console.log("Olive Green");
        break;
    case 'FRIDAY':
        console.log("Cream");
        break;
    case 'SATURDAY':
        console.log("Relax today is weekend");
        break;
    case 'SUNDAY':
        console.log("Relax today is sunday");
        break;
    default:
        console.log("Please input a valid day");
}
