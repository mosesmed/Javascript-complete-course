'use strict';

const startNum = [1,2,3,4,5,6];
console.log(...startNum);

const [numA, numB, ...otherNum] = startNum;
console.log(numA, numB, otherNum);
const [, num2, ,num4, ...others] = startNum;
console.log(num2, num4, others);

console.log(...others);


// function calcAdd (a,b){
//     let myResult =  a + b;
//     console.log(myResult);
// }
// calcAdd(1,2);
const figA = [1,2,3,4,4];
function calcAdd (...numbers){
    let sum = 0;
    for (let i = 0; i<numbers.length; i++){
        // sum = numbers + sum;
        sum += numbers[i];
    }
    console.log(sum);
}

calcAdd(10,10,10,20,30);

