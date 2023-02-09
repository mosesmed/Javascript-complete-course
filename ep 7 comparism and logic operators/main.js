//comparism
let myAge = 18;
let minAge = 18;

console.log(myAge === minAge);

// == less strict
// === is more strict

//logic operator
let x = 5, y = 2, z = 3;
// AND &&
// OR ||
// NOT !

//AND
let result = x < y && y < z;
console.log(result);

//OR
result = x < y || x < z;
console.log(result);

//NOT
let m = !result;
console.log(m);

let myPass = '12';
let inputPass = 12
if(inputPass !== myPass){
    console.log("Your password is not correct");
}else{
    console.log("You can login");
}


