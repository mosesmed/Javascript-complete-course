'use strict';

const myNum = [3,4,5];
//spreading out array manually
console.log(myNum[0], myNum[1], myNum[2]);
//spread operator
console.log(...myNum);

const myNumB = [6, 7, 8];
//combining two arrays to create new array manually
const myNumSumFake = [myNum[0], myNum[1], myNum[2], myNumB[0], myNumB[1], myNumB[2]];
console.log(myNumSumFake);

//spread operator combining two arrays to one
const myNumSum = [...myNum, ...myNumB];
console.log(myNumSum);

//adding items to existing array
const newMyNum = [1,2,...myNumSum];
console.log(newMyNum);

//spread operator and objects
const profile = {
    Name: 'Moses',
    Age: 28,
    Numbers: [1,2,3,4,5]
}

// console.log(profile.Numbers);
// const myNewPool = profile.Numbers;
// console.log(myNewPool);
// myNewPool[0] = 5;
// console.log(myNewPool);
// console.log(profile.Numbers);

const myNewPoolB = [...profile.Numbers];
console.log(myNewPoolB);
myNewPoolB[0] = 5;
console.log(myNewPoolB);
console.log(profile.Numbers);