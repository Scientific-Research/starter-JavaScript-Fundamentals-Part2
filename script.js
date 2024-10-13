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

/* Introduction to Arrays! */
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friend = ["Michael", "Steven", "Peter"];
console.log(friend);

/*creating an array using new word!*/
const years = new Array(1991, 1984, 2008, 2020);
const date = new Date("01.06.2056"); /* creating a new time using new word! */
console.log(date);
console.log(years);

/* Getting the elements out of an Array: */
console.log(friend[0]);
console.log(friend[1]);
console.log(friend[2]);

console.log(`Number of elements in this array: ${friend.length}`);
console.log(friend[friend.length - 1]);
friend[2] = "Jay";
console.log(friend);
// friend = ["Bob", "Alice", "Jack"]; This is not possible-we can not change the whole array!! but we can only change an element inside an array like what we did above => friend[2] = "Jay";

console.log(years[0]);
console.log(years[1]);
console.log(years[2]);
console.log(years[3]);
console.log(`Number of elements in this array: ${years.length}`);
console.log(years[years.length - 1]);

/* Array can store all kind of information: */
/* we can put string, number, variable, expression and even another array inside this array: */
const firstName = "Maximilian";
const maximilian = [
  firstName,
  "Karimi",
  new Date().getFullYear() - 1980,
  "Engineer",
  friend,
];
console.log(maximilian);
console.log(maximilian.length);

/* An exercise for array using forEach:: */
const calcAge_2 = (years_new) => {
  const age_result = [];
  if (!Array.isArray(years_new)) {
    console.error("years_new is not an array");
    return;
  }
  years_new.forEach((element) => {
    const age = 2037 - element;
    age_result.push(age);
  });
  return age_result;
};

const years_new = [1990, 1967, 2002, 2010, 2018];
const result = calcAge_2(years_new);
console.log(result);

/* /////////////////////////////////// */
const calcAge_3 = (birthyear) => {
  return 2037 - birthyear;
};

const years_new_1 = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge_3(years_new_1[0]));
console.log(calcAge_3(years_new_1[1]));
console.log(calcAge_3(years_new_1[years_new_1.length - 1]));

/* or put the results in an array: */
const ages = [
  calcAge_3(years_new_1[0]),
  calcAge_3(years_new_1[1]),
  calcAge_3(years_new_1[years_new_1.length - 1]),
];
console.log(ages);

/* Basic Array Operations: */
const friend_neu = ["Michael", "Steven", "Peter"];
/* the original array stay always without any changes(immutable => unchangable!) and push mutate(make a copy) from original array and add the new element to the end of this new array! */

/* push(add) add this element to the end of the new array! */
const newLength = friend_neu.push("Abdol");
console.log(friend_neu);
console.log(newLength); /* give us the length of the new array! */

/* How to add the element at the beginning of the array: */
friend_neu.unshift("Ghazanfar");
console.log(friend_neu);

/* remove the last elemnet from the new array! */
const removedElement1 =
  friend_neu.pop(); /* send us not the length of the new array, but the name of the removed elemnet back! */
const removedElement2 = friend_neu.pop();
console.log(friend_neu, removedElement1, removedElement2);

/* how to remove the first elemnet in the array: */
const removedTheFirstElement = friend_neu.shift();
console.log(friend_neu);
console.log(removedTheFirstElement);
