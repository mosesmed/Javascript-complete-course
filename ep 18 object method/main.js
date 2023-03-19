'use strict';

//object
const profile = {
    firstName: 'Moses',
    lastName: 'Med',
    gender: 'Male',
    birthYear: 1998,
    age: function(){
        return 2023 - this.birthYear;
    }
};

console.log(profile.age());

// //function declaration
// function age(birthYear){
//     return 2023 - birthYear;
// }
// console.log(age(1998));

// //function expression
// let ageB = function (birthYear){
//     return 2023 - birthYear
// }
// console.log(ageB(1998));

// //Arrow function
// ageB = (birthYear) => {
//     return 2023 - birthYear
// }
// console.log(ageB(1998));





