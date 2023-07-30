// Logic Statements

let rain = true;
if(rain){
    console.log("** Taking my umbrella when I need to go outside **");
} else {
    console.log("** I can leave my umbrella at home **");
}

/*
if(expression) {
    code associated with the if block
    will only be executed if the expression is true
} else {
    code associated ith the else block
    we don't need an else block, it is original
    this code will only be executed if the expression is false
}
*/

let age = 12;
if(age < 18) {
    console.log("We're very sorry, but you can't get in under 18");
} else {
    console.log("Welcome!");
}

let hobby = "dancing";
if(hobby === "coding"){
    console.log("** I love coding too! **");
} else {
    console.log(" ** Can you teach me that? **");
}

// Exercise 4.1

const test = false;
console.log(test);
if(test){
    console.log("It's True");
}
if(test){
    console.log("False now");
}


// else if statements

/*
let humanAge = 10;
let cost = 0;
let message;
if (age < 3) {
    cost - 0;
    message = "Access is free under three.";
}   else if (age >= 3 && age <12) {
    cost = 5;
    message = "With the child discount, the fee is 5 dollars";
}   else if (age >= 12 && age <65) {
    cost = 10;
    message = "A regular ticket costs 10 dollars.";
}   else {
    cost = 7;
    message = "A ticket is 7 dollars.";
}

console.log(message);
console.log("Your Total is: " +cost);
*/

// another way to write the above example:

let humanAge = 17;
if(humanAge < 3){
    console.log("access is free under three.");
} else if(humanAge < 12) {
    console.log("With the child discount, the fee is 5 dollars");
} else if(humanAge < 65) {
    console.log("A regular ticket costs 10 dollars.");
} else if(humanAge >= 65) {
    console.log("A ticket is 7 dollars.");
}

// Exercise 4.2 - separate file

// Conditional ternary operators - very short actions, easier to read.

// operand1 ? operand2 : operand3;

// expression ? statement for true: statement associated with false;

// if operand1, then operand2, else operand3

accessAge = 38
// let access = accessAge < 18 ? "denied" : "allowed";
// console.log(access);
accessAge < 18 ? console.log("denied") : console.log("allowed");

// Exercise 4.3



// switch statements - four of five values

let activity = "Watch Netflix";/*
if(activity === "Get up") {
    console.log("It is 6:30AM");
} else if(activity === "Breakfast") {
    console.log("It is 7:00AM");
} else if(activity === "Drive to work") {
    console.log("It is 8:00AM");
} else if(activity === "Lunch") {
    console.log("It is 12:00PM");
} else if(activity === "Drive home") {
    console.log("It is 5:00PM")
} else if(activity === "Dinner") {
    console.log("It is 6:30PM");
}

/* better to use switch statement:

switch(expression) {
    case value1:
        code to be executed...
        break;
    case value2:
        code to be executed...
        break;
    case value-n:
        code to be executed
        break;
}

switch(activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
}
*/

// default case

switch(activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
    default:
        console.log("I cannot determine the current time.");
        break;
}

// Exercise 4.4

// random number between 0 and 1
let randomNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 19
randomNumber = randomNumber * 10;
// removes digits past decimal place to provide a whole number
randomNumber = Math.floor(randomNumber);











// Combining cases

let grade = "F";

switch(grade) {
    case "F":
    case "D":
        console.log("You've failed!");
        break;
    case "C":
    case "B":
        console.log("You've passed!");
        break;
    case "A":
        console.log("Nice!");
        break;
    default:
        console.log("I don't know this grade.");
}

// more readable

if (grade === "F" || grade === "D") {
    console.log("You've failed!");
}   else if(grade === "C" || grade === "B") {
    console.log("You've passed!");
}   else if(grade === "A"){
    console.log("Nice!");
}   else{
    console.log("I don't know this grade.");
}

// Exercise 4.5

// Chapter project 