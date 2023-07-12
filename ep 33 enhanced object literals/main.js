'use strict';

// const profile = {
//     Name: 'Moses Med',
//     Birthyear: 1998,
//     Age: function($currentYear){
//         let calc = $currentYear - this.Birthyear;
//         return calc;
//     }
// }

// console.log(profile.Age(2023));

const friends = ['Mike','Moses','Matt', 'Mark'];

// const profile = {
//     Name: 'Moses Med',
//     Birthyear: 1998,
//     Friends: friends,
//     Age($currentYear){
//         let calc = $currentYear - this.Birthyear;
//         return calc;
//     }
// }

// console.log(profile.Age(2023));
// console.log(profile);

const profile = {
    Name: 'Moses Med',
    Birthyear: 1998,
    friends,
    Age($currentYear){
        let calc = $currentYear - this.Birthyear;
        return calc;
    }
}

console.log(profile);