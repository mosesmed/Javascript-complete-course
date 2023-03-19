'use strict';

//object
const profile = {
    firstName: 'Moses',
    lastName: 'Med',
    age: 25,
    birthYear: 1998,
    gender: 'Male'
};

const search = 'age';

//dot notation
console.log(profile.firstName);
let firstName = profile.firstName;
console.log(firstName);
console.log(profile.search);
console.log(profile.age);

//bracket notation
console.log(profile['firstName']);
firstName = profile['firstName'];
console.log(firstName);
console.log(profile[search]);
console.log(profile['age']);




