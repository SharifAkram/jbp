/*
Exercise 4.2

Create a prompt to ask the user's age 
Convert the response from the prompt to a number 
Declare a message variable that you will use to hold the console message for the user 
If the input age is equal to or greater than 21, set the message variable to confirm entry to a venue and the ability to purchase alcohol
If the input age is equal to or greater than 19, set the message variable to confirm entry to the venue but deny the purchase of alcohol 
Provide a default else statement to set the message variable to deny entry if none are true 
Output the response message variable to the console
*/

const prompt=require("prompt-sync")({sigint:true});

let age = prompt("How old are you? ");
age = Number(age);
let message;
if(age >= 21){
    message = "You can enter and drink.";
}else if(age >= 19){
    message = "You can enter but not drink.";
}else{
    message = "You are not allowed in!";
}
console.log(message);

/*
let text;
let favDrink = prompt("What's your favorite cocktail drink?");
switch(favDrink) {
    case "Coca-Cola":
        text = "Excellent choice! Coca-Cola is good for your soul.";
        break;
    case "Pepsi":
        text = "Pepsi is my favorite too!";
        break;
    case "Sprite":
        text = "Really? Are you sure the Sprite is your favorite?";
        break;
    default:
        text = "I have never heard of that one!";
}
*/