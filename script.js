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

/* How many years is still remaining till retirement? calculate the year using arrow function:*/

const yearsTillRetirement = (yourBirthday, firsName) => {
  const yearOfRetirement = 67;
  const currentYear = new Date().getFullYear();
  const yourAge = currentYear - yourBirthday;
  const yearsTillRetirement = yearOfRetirement - yourAge;
  // return yearsTillRetirement;
  return `${firsName} has ${yearsTillRetirement} years till retirement!`;
};

const yearsTillRetirement_result = yearsTillRetirement(1991, "Jonas");
const yearsTillRetirement_result_1 = yearsTillRetirement(1980, "Maximilian");
// console.log(
//   `The years till your retirement: ${yearsTillRetirement_result} years!`
// );
console.log(yearsTillRetirement_result);
console.log(yearsTillRetirement_result_1);

/* Calling a function inside another function: */
const cutPieces = (fruit) => {
  return fruit * 4;
};

const fruitProcessor_new = (apples, oranges) => {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor_new(2, 3));

/* a new example about the calling a function inside another function: */
const calcAge_1 = (birthyear) => {
  return 2037 - birthyear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge_1(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    // console.log(`You have to work still ${retirement} years till retirement!`);
    const output = `${firstName} has to work still for next ${retirement} years till retirement!`;
    return output;
  } else {
    // console.log(`You are laready retired since ${retirement} years ago!`);
    const output = `${firstName} is already retired since ${Math.abs(
      retirement
    )} years ago!`;
    return output;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
