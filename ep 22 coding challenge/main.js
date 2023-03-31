'use strict';

//question one
let average = (num1, num2, num3) => {
    return (num1 + num2 + num3)/3;
}

const renny = Math.trunc(average(50, 81, 63));
const damico = Math.trunc(average(49, 83, 60));
const modakeke = Math.trunc(average(48, 73, 75));

// console.log(renny, damico, modakeke);

let winner = function (data1, data2, data3) {
    if(data1 > data2 && data1 > data3){
        return data1;
    }else if(data2 > data1 && data2 > data3){
        return data2;
    }else if(data3 > data1 && data3 > data2){
        return data3
    }else{
        return 'No winner';
    }
}

console.log (winner(renny, damico, modakeke));

//question two
let vat = (cost) => {
    if(cost <= 50){
        let calc = 0.2 * cost;
        return calc;
    }else if (cost > 50){
       let calc = 0.1 * cost;
        return calc;
    }else{
        return "Calculation Error!!!";
    }
}

const cost1 = vat(43);
const cost2 = vat(75);
const cost3 = vat(50);

const vats = [cost1, cost2, cost3];
console.log(vats);

const totalCosts = [cost1+43, cost2+75, cost3+50];
console.log(totalCosts);

//question three
const john = {
    name: 'John',
    birthYear: 1998,
    age: function (){
        return 2019 - this.birthYear;
    }
}

const james = {
    name: 'James',
    birthYear: 2008,
    age: function (){
        return 2019 - this.birthYear;
    }
}

let eligibility = (age,name) => {
    if(age >= 18){
        return `${name} is eligible to drive`;
    }else{
        return `${name} is not eligible to drive`;
    }
}

console.log(eligibility(john.age(), john.name));
console.log(eligibility(james.age(), james.name));

//question four
const newCosts = [43, 75, 50];

let newVats = [];
let newTotals = []

for(let i = 0; i < newCosts.length; i++){
    let vatCalc = vat(newCosts[i]);
    newVats.push(vatCalc);
    newTotals.push(vatCalc + newCosts[i]);
}
console.log(newVats);
console.log(newTotals);

