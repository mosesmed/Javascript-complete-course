'use strict';

const friendA = 'Mark'
const friendB = 'John'
const friendC = 'Jane'
const friendD = 'Jack'
const friendE = 'Juliet'

//second method of declaring an array
// const myFriendsB = new Array('Mark', 'John', 'Jane', 'Jack', 'Juliet');

const myFriends = ['Mark', 'John', 'Jane', 'Jack', 'Juliet'];

console.log(myFriends);
console.log(myFriends[1]);
myFriends[1] = 'Moses';

console.log(myFriends[1]);
console.log(myFriends);

myFriends.push('David');
console.log(myFriends);

myFriends.unshift('Mathew');
console.log(myFriends);

myFriends.pop();
console.log(myFriends);

myFriends.shift()
console.log(myFriends);

console.log(myFriends.indexOf('Mark'));
console.log(myFriends.includes('David'));
