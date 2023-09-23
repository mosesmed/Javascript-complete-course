'use strict';

let schoolName = 'Renny Children School';
schoolName = schoolName.toLowerCase();
console.log(schoolName);

schoolName = schoolName.toUpperCase();
console.log(schoolName);

const studentName = 'MaRk';
const studentNameToLower = studentName.toLowerCase();
console.log(studentNameToLower);

const studentNameCorrect = studentNameToLower[0].toUpperCase()+studentNameToLower.slice(1);

console.log(studentNameCorrect);

//trim()
const sentence = ' My name is Moses /n    ';
const newSentence = sentence.trim();
console.log(newSentence);

//replace(), replaceAll()
let mySentence = 'My name is Moses. Moses is a guy';
mySentence = mySentence.toLowerCase();
const myNewSentence = mySentence.replace(/Moses/g, 'Daniel');
console.log(myNewSentence);

//includes(), startsWith(), endsWith(), split()
const checkSentence = mySentence.includes('John');
console.log(checkSentence);

const checkSentence2 = mySentence.startsWith('my');
console.log(checkSentence2);

const checkSentence3 = mySentence.endsWith('guy');
console.log(checkSentence3);

//split()
let friends = 'Moses Daniel John Mark';
friends = friends.split(' ');
console.log(friends);

let myName = "Moses+Med+Adeoye";
myName = myName.split('+');
console.log(myName);

//destructuring
const [firstname, lastname, middlename] = myName;
console.log(firstname);
console.log(lastname);
console.log(middlename);

