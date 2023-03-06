'use strict';

function isItWorking(){
    console.log('It is working');
}

isItWorking();

function myProfile(birthYear){
    let ageCalc = 2023 - birthYear;
    return ageCalc;
}

let age = myProfile(1998);
console.log(`He is ${age} years old`);

//function expression
let myName = function(name){
    myName = (`My name is ${name}`);
    return myName;
}

console.log(myName('Moses'));

//calling a function in another function
function ageCalculator(birthYear){
    let ageCalc = 2023 - birthYear;
    return ageCalc;
}

function myProfile(name, birthYear){
    let age = ageCalculator(birthYear);
    console.log(`My name is ${name} and I am ${age} years old`);
}

myProfile('Moses', 1998);