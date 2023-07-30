// Javascript Multiple Values //

arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];

arr3 = new Array(10);
arr4 = [10];

console.log(arr3);
console.log(arr4);

let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

/*
const arr = ["hi there"];
arr[0] = "new value";
console.log(arr[0]);

arr = ["nope, now you are overwriting the array"];
*/

cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[-1]);

cars[0] = "Tesla"
console.log(cars[0]);
console.log(cars);

cars[3] = "Kia";
cars[-1] = "Fiat";
console.log(cars[3]);
console.log(cars[-1]);

colors = ["black", "orange", "pink"]
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length)

lastElement = colors[colors.length - 1];

numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);
console.log("numbers", numbers);

// Exercise 3.1

shoppingList = ["Milk", "Bread", "Apples"];
console.log(shoppingList.length)
shoppingList[1] = "Bananas"
console.log(shoppingList)

// add elements with push() method:

favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(favoriteFruits);

// splice() method, adding elements at specific indexes:

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);

arrOfShapes.splice(2, 2, "square", "trapezoid");
// arrOfShapes.splice(2, 12, "square", "trapezoid");
console.log(arrOfShapes);

// concat() - add an array to an array, also to add values

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

// deleting elements

arr8.pop();
console.log(arr8)

// deleting first element, shift()

arr8.shift();
console.log(arr8);

arr8.splice(1, 3);
console.log(arr8);

delete arr8[0];
console.log(arr8);

// finding elements

arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function(e){return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

// indexOf() if value occurs in array more than once,
// it will return the first occurrence

arr8 = [2, 6, 7, 8];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);

arr8 = [2, 6, 7, 8];
let findIndex3 = arr8.indexOf(6, 2);
console.log(findIndex3);

// lastIndexOf() - last occurrence

let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);

// sorting

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
console.log(names.sort());

let ages = [18, 72, 33, 56, 40];
console.log(ages.sort());

// reversing

console.log(names.reverse());

// Exercise 3.2

/*
Create an empty array to use as a shopping list. 
Add Milk, Bread, and Apples to your list. 
Update "Bread" with Bananas and Eggs. 
Remove the last item from the array and output it into the console. 
Sort the list alphabetically. 
Find and output the index value of Milk. 
After Bananas, add Carrots and Lettuce. 
Create a new list containing Juice and Pop. 
Combine both lists, adding the new list twice to the end of the first list. 
Get the last index value of Pop and output it to the console. 
Your final list should look like this:  
["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop", "Juice", "Pop"]
*/

const myList = [];
myList.push("Milk", "Bread", "Apples");
myList.splice(1, 1, "Bananas", "Eggs");
const removeLast = myList.pop();
console.log(removeLast);
myList.sort();
console.log(myList.indexOf("Milk"));
myList.splice(1, 0, "Carrots", "Lettuce");
const myList2 = ["Juice", "Pop"];
const finalList = myList.concat(myList2, myList2);
console.log(finalList.lastIndexOf("Pop"));
console.log(finalList);

// Multidimensional Arrays - an array of arrays; a list of lists


let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
let arrOfArrays2 = [[1, 2, 3,], [4, 5, 6], [7, 8, 9]];
let value1 = arrOfArrays[0][1]; 
let value2 = arrOfArrays[2][2];
console.log(value1);
console.log(value2);

arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arrOfArraysOfArrays);

// let's get middle element of this array

let middleValue = arrOfArraysOfArrays[1][1][1];
console.log(middleValue);

// Exercise 3.3

const myArr = [1, 2, 3];
const bigArr = [myArr, myArr, myArr];
console.log(bigArr[0][1]);
console.log(bigArr[1][1]);
console.log(bigArr[2][1]);

// Objects in Javascript

let arr9 = [0, 1, 2];
console.log(typeof arr9);

let dog = {dogName: "Javascript",
        weight: 2.4,
        color: "brown",
        breed: "chihuahua",
        age: 3, 
        burglarBiter: true
        };

// let dogColor1 = dog["color"];
let dogColor2 = dog.color;
console.log(dogColor2);

// updating objects

dog["color"] = "blue";
dog.weight = 2.3;
console.log(dog);

dog["age"] = "three";
let variable = "age";
console.log(dog[variable]);

variable = "breed";
console.log(dog[variable]);

dog[variable] = "dachshund";
console.log(dog["breed"]);

// Exercise 3.4

myCar = {make: "Hyundai",
    model: "Accent",
    color: "Red",
    miles: 56000,
    transmission: "Automatic",
    forSale: false};

let propColor = "color";
myCar[propColor] = "Black";
propColor = "forSale";
myCar[propColor] = "true";
console.log(myCar.make + " " + myCar.model + " " + myCar["color"]);
console.log(myCar.forSale);

// objects in objects

let company = {companyName: "Healthy Candy",
        activity: "food manufacturing",
        address: {
            street: "SE 3rd Ave",
            number: "215",
            zipcode: "33009",
            city: "Hallandale Beach",
            state: "Florida"
        },
        yearOfEstablishment: 2021
        };

// arrays in objects 

company.address.zipcode = "33117";
company["address"]["number"] = "100";

company = {companyName: "Healthy Candy",
        activities: ["food manufacturing",
"improving kids' health", "manufacturing toys"],
        address: {
            street: "SE 3rd Ave",
            number: "215",
            zipcode: "33009",
            city: "Miami",
            state: "Florida"
        },
        yearsOfEstablishment: 2021
        };

let activity = company.activities[1];
console.log(activity);

// objects in arrays

let addresses = [{
    street: "SE 3rd Ave",
    number: "215",
    zipcode: "33009",
    city: "Miami",
    state: "Florida"
},
{
    street: "Monticello Blvd",
    number: "3044",
    zipcode: "44118",
    city: "Cleveland Heights",
    state: "Ohio"
}];

let streetName = addresses[0].street;
console.log(streetName);

// objects in arrays in objects

company = {companyName: "Healthy Candy",
        activities: ["food manufacturing",
"improving kids' health", "manufacturing toys"],
        address: [{
            street: "SE 3rd Ave",
            number: "215",
            zipcode: "33009",
            city: "Miami",
            state: "Florida"
        },
        {
            street: "Monticello Blvd",
            number: "3044",
            zipcode: "44118",
            city: "Cleveland Heights",
            state: "Ohio"
        }],
        yearsOfEstablishment: 2021
        };

let streetName2 = company.address[0].street;
console.log(streetName2);

// exercise 3.5

const people = {friends: []};
const friend1 = {first: "Cyrano", last: "Irons", id: 1};
const friend2 = {first: "Debra", last: "Carter", id: 2};
const friend3 = {first: "Aaron", last: "Holland", id: 3};
people.friends.push(friend1, friend2, friend3);
console.log(people);
