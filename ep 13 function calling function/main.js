'use strict';

//calling a function in another function
function ageCalculator(birthYear){
    let ageCalc = 2023 - birthYear;
    return ageCalc;
}

// let age = ageCalculator(1998);

// console.log(ageCalculator(1998));

function myProfile(name, birthYear){
    let age = ageCalculator(birthYear);
    console.log(`My name is ${name} and I am ${age} years old`);
}

myProfile('Moses', 1998);