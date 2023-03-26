const dogs = [
    'Bingo',
    'Smart',
    'Romio',
    'Cassey',
    'Crep',
    'Juliet',
    'Jack'
]

//array method
console.log(dogs.length);

//callout array items
console.log(dogs[0]);

for(let x = 0 ; x < dogs.length ; x++){
    console.log(`Dog ${x} is ${dogs[x]}`);
}