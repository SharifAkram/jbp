// Javascript essentials

/* variables 

firstname = "Maaike";
x = 2;
firstname = "Edward";
x = 7;

declaring variables

let firstname = "Maria";
firstname = "Jacky";

let nr1 = 12;
var nr2 = 8;
const PI = 3.14159;

/* error: 
const someConstant = 3;
someConstant = 4;
*/

/*

strings

let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);

escape characters

let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "MIke"?';
console.log(str2);

let str3 = "New \nline.";
let str4 = "I'm containing a backlash:\\!";
console.log(str3);
console.log(str4);

*/

// symbol

/*

let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These to Strings are the same:", str1 === str2);

let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);

*/

// undefined & null

let unassigned;
console.log(unassigned);

let terribleThingToDO = undefined
let lastName;
console.log("Same undefined:", lastName === terribleThingToDO);

let betterOption = null;
console.log("Same null:", lastName === betterOption);

// type of variable

testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof(testVariable);
console.log(variableTypeTest1);
console.log(variableTypeTest2);

// converting data types

/*
let nr1 = 2;
let nr2 = "2";
console.log(nr1 * nr2);

let nr1 = 2;
let nr2 = "2";
console.log(nr1 + nr2);

*/

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

/*
let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

*/

// convert a string to 0 when it is empty or null

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr);

// NaN number

let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);

let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);
let strToBool = "";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

// practice 2.1

// my solution

/*

let str1 = 'Laurence';
str1 = typeof str1;
console.log(str1);

let str2 = "Svekis";
str2 = typeof str2;
console.log(str2);

let val1 = undefined;
val1 = typeof val1
console.log(val1);

let val2 = null;
val2 = typeof val2;
console.log(val2);

let myNum = 1000;
myNum = typeof myNum;
console.log(myNum);

*/

let str1 = 'Laurence';
console.log(typeof(str1));

let str2 = "Svekis";
console.log(typeof(str2));

let val1 = undefined;
console.log(typeof(val1));

let val2 = null;
console.log(typeof(val2));

let myNum = 1000;
console.log(typeof(myNum));


// 2.2

const myName = "Sharif";
const myAge = 37;
const coder = true;
const message = "Hello, my name is " + myName + ", I am " + myAge + " years old and I can code JavaScript: " + coder + ".";
console.log(message);

// modulus

/*
let nr1 = 10;
let nr2 = 3;
let result1 = nr1 % nr2;
console.log(`${nr1} % ${nr2} = ${result1}`);

let nr3 = 8;
let nr4 = 2;
let result2 = nr3 % nr4;
console.log(`${nr3} % ${nr4} = ${result2}`);

let nr5 = 15;
let nr6 = 4;
let result3 = nr5 % nr6;
console.log(`${nr5} % ${nr6} = ${result3}`);

*/

// unary operators

/*
let nr1 = 4;
nr1++;
console.log(nr1);
let nr2 = 4;
nr2--;
console.log(nr2)

let nr = 2;
console.log(nr++);
console.log(nr);
*/

let nr1 = 4;
let nr2 = 5;
let nr3 = 2;
console.log(nr1++ + ++nr2 * nr3++);

// assignment operators

// no notes...

// comparison operators

/*
let x = 5;
let y = "5";
console.log(x == y);
console.log(x === y);     // use when to check for equality
console.log(x != y);
console.log(x !== y);

let x = 5;
let y = 6;
console.log(y > x);
console.log(y > y);
console.log(y <= y);
*/

// logical operators

let x = 1;
let y = 2;
let z = 3;

console.log(x < y && y < z);
console.log(x > y && y < z);
console.log(x > y || y < z);
console.log(!(x < y));