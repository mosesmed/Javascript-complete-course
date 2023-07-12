'use strict';

const friends = ['mike', 'moses', 'mark', 'matt'];

//for loop
for (let i = 0; i<friends.length; i++){
    console.log(friends[i]);
}

//for of loop
console.log(' ');
for(let friend of friends){
    console.log(friend);
}