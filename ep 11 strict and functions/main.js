'use strict';

//textToScreen();

function textToScreen(){
    console.log("The function is working");
}

textToScreen();

function foodOrder(food, drink){
    console.log(`Table 3 ordered ${food} and ${drink}`);
}

foodOrder('cheese burger', 'coca-cola');
foodOrder('Noodles', 'Pepsi');

function foodOrderB(table, food, drink){
    console.log(`Table ${table} ordered ${food} and ${drink}`);
}

foodOrderB(2, 'Tacos', 'Coke');
foodOrderB(10, 'Fried Rice', 'Water');