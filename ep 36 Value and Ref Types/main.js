'use strict';

//value types - Number, String, Null, Bollean
let x = 1;
let y = x;
y = 2;
console.log(x);
console.log(y);

//reference types - Array, Object, Function
console.log('reference types');
let z = [1,2,3,4];
let w = z;
w.push(5);
console.log(z);
console.log(w);