// Loops

// while, do while, for, for in, for of

const prompt=require("prompt-sync")({sigint:true});

// while loops

// negative infinity
/*
let i = 0;
while(i < 10) { 
    console.log(i);
    i--;
}
*/

let i = 0;
while(i < 10) { 
    console.log(i);
    i++;
}

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
    if (someArray[0] === "Jacky") {
        console.log("Found her!");
        notFound = false;
    }   else {
        someArray.shift();
    }
}

// fibonacci sequence

let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];
while (fibonacciArray.length < 25) {
    fibonacciArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;
}
console.log(fibonacciArray);

// exercise 5.1 - separate file 

// do while loops

/*
let number;
do {
    number = prompt("Please enter a number between 0 and 100: ");
} while(!(number >= 0 && number < 100));
*/

// exercise 5.2

let counter = 0;
let step = 5;
do {
    console.log(counter);
    counter += step;
}
while (counter <= 100);

// for loops

// 0 to -10

for (let i = 0; i > -10; i--){
    console.log(i);
}

// 0 to 10

for (let i = 0; i < 10; i++){
    console.log(i);
}

let arr = [];
for (let i = 0; i < 100; i++){
    arr.push(i);
}
console.log(arr);

// array containing two values:

let arr2 = [];
for (let i = 0; i < 100; i = i + 2){
    arr2.push(i);
}
console.log(arr2);

// exercise 5.3

// nested loops

let arrOfArrays = [];
for (let i = 0; i < 3; i++){
    arrOfArrays.push([]);
    for (let j = 0; j < 7; j++){
        arrOfArrays[i].push(j);
    }
}
console.log(arrOfArrays);

console.table(arrOfArrays);

//  exercise 5.4

// loops and arrays

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// change values of array in a loop

let firstNames = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < firstNames.length; i++){
    firstNames[i] = "hello " + firstNames[i];
} 
console.log(firstNames);

// data can be sent to the database per value:

let lastNames = ["Akram", "Singh", "Carter", "Nugmanov", "Thompson"];
for (let i = 0; i < lastNames.length; i++){
    if(lastNames[i].startsWith("T")){
        delete lastNames[i];
        continue;
    }
    lastNames[i] = "hello " + lastNames[i];
}
console.log(lastNames);
