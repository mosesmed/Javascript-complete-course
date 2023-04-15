'use strict';

const music = {
    Name: 'Dance Floor',
    Gener: 'Amapiano',
    Category: ['Africa', 'Dance', 'Fast', 'Jazz'],
    Duration: '3 min',
    Year: 2019,
    Existence: function (current){
        return current - this.Year;
    }
}

// const example = music.Name;
// console.log(example);
const {Gener, Name, Category, Category: [x,y, , z], Existence} = music;

const [a, b, c, d] = music.Category;

console.log(music.Existence(2023));
console.log(a);
