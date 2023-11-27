'use strict';

// const currentYear = 2023;

// const calcAge = function (birthYear){
//     return currentYear - birthYear;
// }

// //higher order function
// const ageInTenYears = function (age){
//     const tenYearsAge = age + 10;
//     console.log(`Age in ten years will be ${tenYearsAge}`);
// }

// ageInTenYears(calcAge(1998));

const currentYear = 2023;
const birthYears = [1998, 1997, 2000, 2003];

const calcAge = function (birthYear){
    return currentYear - birthYear;
}

//higher order function
const tenYearsAge = function (calcAge, birthYears){
    let output = [];
    for(let i = 0; i < birthYears.length; i++){
        output.push(calcAge(birthYears[i]) + 10);
    }
    return output;
}

console.log(tenYearsAge(calcAge, birthYears));