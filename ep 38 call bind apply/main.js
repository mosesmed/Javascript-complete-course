'use strict';

// const person = {
//     Name: 'Moses',
//     Age: 25,
//     Profile: function (){
//         console.log(`${this.Name} is ${this.Age} years old`);
//     }
// }

// const person2 = {
//     Name: 'David',
//     Age: 35
// }

// person.Profile.call(person2);
// person.Profile();

const profile = function (state, country){
    console.log(`${this.Name} is ${this.Age} years old from ${state}, ${country}`);
}

const person = {
    Name: 'Moses',
    Age: 25,
    State: 'Lagos',
    Country: 'Nigeria'
}

const person2 = {
    Name: 'David',
    Age: 35,
    State: 'United Kingdom',
    Country: 'England'
}

const person3 = {
    Name: 'John',
    Age: 45,
    State: 'New York',
    Country: 'USA'
}
// //call
// profile.call(person, person.State, person.Country);
// profile.call(person2, person2.State, person2.Country);
// profile.call(person3, person3.State, person3.Country);

// //apply
// profile.apply(person, [person.State, person.Country]);
// profile.apply(person2, [person2.State, person2.Country]);
// profile.apply(person3, [person3.State, person3.Country]);

//bind
const profile1 = profile.bind(person, person.State, person.Country);
const profile2 = profile.bind(person2, person2.State, person2.Country);
const profile3 = profile.bind(person3, person3.State, person3.Country);
profile1();
profile2();
profile3();