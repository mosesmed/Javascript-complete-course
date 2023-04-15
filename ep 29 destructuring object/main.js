'use strict';

const friends = [
    'Moses',
    'John',
    'Mathew',
    'Jack',
    ['Julieth','Jane', 'Magret']
]

// const friendA = friends[0];
// const friendB = friends[4];

const [ , , , , [x, y, z]] = friends;
console.log(y);