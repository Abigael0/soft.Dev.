console.log("Welcome to class!");

//variables
let name = "Ada";

//variable are case sensitive
let age = 20;
let Age = 50;
let AGE = 70;

let address = "Igando, Lagos";
let quantity = 30;

//variable casing: advisable pascal
let myBestColour = "green";
let my_best_colour = "yellow";

console.log(age);

age = 30;
age = 0.9;
console.log(age);

//changing a variable
let score = 80;
score = 40;
console.log(score);


//data type
//strings
let Name = "john";

//numbers
let ages = 20;

//boolean
let isStudent = true;
let isAlive = true;
let iDontUnderstand = false;

console.log(isAlive);

let x = 20;
let y = 50;

console.log(x + y);

//Concatenation
let a = "20";
let b = "50";
console.log(a + b);


let m = "20";
let n = 50;
console.log(m + n);  // the result: it convert the n to a string since the first is a string


let p = 20;
let q = "50";
console.log(p + q);


//operators
//arithmetic operators
let c = 20;
let d = 50;

let sum = c + d;
let product = c * d;

console.log("The sum is: ", sum);
console.log("The product is: ", product);


//comparison arithmetic
let comparison = c > d;
console.log(comparison);

let comparisons = c !== d;
console.log(comparisons);


//conditions
//if
let result = 70;

if(result >50){
    console.log("passed");
    console.log("welcome to a new class!");
}

console.log("am done");

//else if
let outcome = 60;

if(outcome >40){
    console.log("success");
    console.log("you passed the cut off mark");
}else{
    console.log("you failed");
}


let outcomes = 9;
if(outcomes > 40){
    console.log("success");
    console.log("you passed the cut off mark");
}else{
    console.log("you failed");
}

let AGe = 20;
if(AGe >= 18){
    console.log("you are an adult");
}else{
    console.log("you are a minor");
}

//loops
//for loop
for(let i = 0; i < 10; i++){
    console.log(i);
}

// for(let j = 0; j < 10; j=i+2){
//     console.log(j);
// }

//while loops
let z = 0;
while (z < 15){
    console.log(z);
    z++;
}

//function
function greetings(){
    console.log("hello");
}
greetings();

function greeting(name){
    console.log("hello " + name);
}
greeting("David");

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('software is life!'));