'use strict';

const school = 'TOA Senior School';
const sBlock = 'TSSC1';

console.log(sBlock[0]);
console.log(school[1]);
console.log(school[3]);
console.log('TSSC1'[2]);

console.log(sBlock.length);
console.log('TSSC1'.length);

console.log(sBlock.indexOf('C'));
console.log(school.lastIndexOf('S'));
console.log(school.indexOf('S'));

console.log(school.slice(4));
console.log(school.slice(4, 10));
console.log(school.slice(school.indexOf('S')))