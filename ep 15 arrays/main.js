'use strict';

const friendA = "Jack";
const friendB = "John";
const friendC = "Jane";
const friendD = "Juliet";
const friendE = "Jonah";

const myFriends = ['Jack', 'John', 'Jane', 'Juliet', 'Jonah'];

console.log(myFriends);

let friendNum = myFriends[2];
console.log(friendNum);

myFriends[0] = 'Moses';
console.log(myFriends);

myFriends[3] = "Mabel";
console.log(myFriends);

const myProfile = new Array('Moses', 'Med', 1996 , 45, 'Single');
console.log(myProfile);

//array methods
myFriends.push('David');
console.log(myFriends);

myFriends.unshift('Mathew');
console.log(myFriends);

myFriends.pop();
console.log(myFriends);

myFriends.shift();
console.log(myFriends);

console.log(myFriends.includes('Jane'));
console.log(myFriends.indexOf('Jane'));