"use strict"; /* we add this Expression to display us the possible errors or Bugs in our code!*/

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "audio";
// const private = 546;

// const if = 345;

/* Functions */
// calling / running / invoking:
function logger() {
  console.log("My name is Maximilian!");
}

logger();
logger();
logger();

/* Function with two inputs and one output! */
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juices = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juices;
}

console.log(fruitProcessor(5, 0)); /* Juice with 5 apples and 0 oranges. */
/* OR the following method: */
const appleJuice = fruitProcessor(5, 0);
/* Juice with 5 apples and 0 oranges. */
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/* Function Declaration vs Function Expression: */
function calcAge(birthyear) {
  const currentYear = new Date().getFullYear();
  const yourAge = currentYear - birthyear;
  return yourAge;
}

const age = calcAge(1980);
console.log(`Your are ${age} years old!`);

/* Write the above function using the arrow function: */
const calcAge_new = (birthyear) => {
  const currentYear = new Date().getFullYear();
  const yourAge = currentYear - birthyear;
  return yourAge;
};

const age_new = calcAge_new(1980);
console.log(`Your are ${age_new} years old!`);

/* or writing the same function but without name => a function without name! */
const calcAge_neu = function (birthyear) {
  const currentYear = new Date().getFullYear();
  const yourAge = currentYear - birthyear;
  return yourAge;
};

const age_neu = calcAge(1980);
console.log(`Your are ${age_neu} years old!`);
