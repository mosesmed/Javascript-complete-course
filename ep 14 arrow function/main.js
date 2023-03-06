'use strict';

function greet(name){
    console.log("Good morning " + name);
}

greet('Moses');

//function declaration, expression and arrow function
let calcResult = (num1, num2, action) => {
    if(action === 'add'){
        let calc = num1 + num2;
        return calc;
    }else if(action === 'mul'){
        let calc = num1 * num2;
        return calc;
    }else if(action === 'div'){
        let calc = num1/num2;
        return calc;
    }else if (action === 'sub'){
        let calc = num1- num2;
        return calc;
    }else {
        let calc = "Calculation cannot be performed";
        return calc;
    }
}

console.log(calcResult(10,10, 'mul'));

// let calcResult = mathOpe(10, 10, 'sub');
// console.log(calcResult);

// Declaration
function greetB(){
    console.log('Greet me B');
}
greetB();

//expression
let greetC = function(){
    console.log('Greet me C');
}

console.log(greetC());

//arrow function
let greetD = () => {
    console.log('Greet me D');
}

console.log(greetD());