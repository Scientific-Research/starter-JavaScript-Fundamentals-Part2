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

/* how to find the index of an element in an array: */
console.log(friend_neu.indexOf("Steven"));
console.log(friend_neu.indexOf("Abbas"));
/* index is -1 because this element is not in the array! */

friend_neu.push(23);
console.log(friend_neu);

/* a similar but a more mordern one: */
console.log(friend_neu.includes("Abbas")); /* false */
/* it doesn't give us the index of the element, but gives us only true is the element is available in the array and false if the element is not available in the array! */
console.log(friend_neu.includes("Steven")); /* true */
console.log(friend_neu.includes("23")); /* false */
/* includes does a strict equality === that's why doesn't accept the string and accepts only the number!*/
console.log(friend_neu.includes(23)); /* true */

/* a new example of using includes in a if condition:*/
const name_includes = "Michael";
if (friend_neu.includes(name_includes)) {
  console.log(`${name_includes} is in the list!`);
} else {
  console.log(`${name_includes} is not in the list!`);
}

/* Objects in JS: */
const JonsArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
console.log(JonsArray);

/* and now converting the above array to an Object! */
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

/* How to retrieve data from an object and how to change the data ina an object using both . notation and [] notation: */

// const lastName = jonas.lastName;
const lastName = jonas["lastName"];
console.log(lastName);

/* using [] notation*/
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
console.log(jonas["first" + nameKey] + " " + jonas["last" + nameKey]);

/* the same using . notation: */
// console.log(jonas."first" + nameKey);
/* it doesn't work using . notation => it works only with bracket[] notation! */

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );

const interestedIn =
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends";

// console.log(interestedIn);
// console.log(jonas["interestedIn"]);
// console.log(interestedIn["firstName"]);

if (!jonas[interestedIn]) {
  console.log("We don't have such a property!");
} else {
  console.log(jonas[interestedIn]);
  /* we don't need here the quotation, because what come out of the prompt is string and we don't need to convert it to string again! */
}

/* how we can add a new property to the object using bracket and dot notations */
// console.log(jonas);
// const jonasCopy = { ...jonas };
// console.log((jonasCopy.age = 23));
// console.log((jonasCopy.firstName = "Akbar"));
// console.log(jonasCopy);

// jonas["location"] = "Germany";
// jonas.hobbit = "Music";
jonas.location = "Germany";
jonas.twitter = "@blablabla";
jonas["hobbit"] = "Music";
jonas["E-Mail"] = "jonas@example.com";
console.log(jonas);

/* a small challenge for me: */
/* "Jonas has 3 friends, and his best friend is called Michael!" */

console.log(jonas.firstName);
console.log(jonas.friends.length);
console.log(jonas.friends[0]);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}!`
);

// const Jonas = {
//   numberOfFriends: 3,
//   nameOFHisBestFriend: "Michael",
// };

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// console.log(Jonas.numberOfFriends);
// console.log(Jonas["numberOfFriends"]);

// console.log(Jonas.nameOFHisBestFriend);
// console.log(Jonas["nameOFHisBestFriend"]);

/* Object Methods: */
/* we can hold all different data taypes in an object: */
const jonas_new = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  /* add a function to the object: */
  /* key : value */

  /* 1. */
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  /* 2. */
  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  /* 3. */
  // calcAge: function () {
  //   this.age = 2037 - this.birthYear;
  //   return this.age;
  // },

  /* using "this" keyword and removing the "birthday" as input parameter! */
  /* when we use "this" keyword, it takes 1991 as birthYear from above birthYear as object parameter, that's why we don't need to allocate the birthYear again here as input parameter!  */
  calcAge: function () {
    // console.log(this);
    /* "this" actually means "jonas_new" here, but using the "this" keyword, we follow the DRY(don't repeat yourself) rule and also when we change the name of the object, then we don't need to hard code this name again and we use simply "this" keyword which does the same for us!*/
    // console.log(jonas_new);
    /* that's why these two statements(console.log(this) , console.log(jonas_new)) have the same results! */

    // return 2037 - this.birthYear;
    this.age = 2037 - this.birthYear;
    /* this is like jonas.age = 2037 - this.birthYear; it means i created a new property called age in jonas_new object */
    return this.age;
  },

  /* writing a new method(function) for the challenge: */
  getSummary: function () {
    // this.info = `${this.firstName} is a ${this.calcAge()}-years old ${
    //   this.job
    // }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
    // return this.info;

    /* or without info as variable and send it directly using only the return: */
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};
// console.log(jonas_new);
// console.log(jonas_new.calcAge(1991));
// console.log(jonas_new["calcAge"](1991));

/* without the year as input argument and using "this" parameter above in the method(function)!  */
console.log(jonas_new.calcAge());

console.log(jonas_new.age);
/* instead of using again and again the calcAge() to get the age, as we see above, we can use the "this" keyword and age(this.age) and create a new property called age in jonas_new object and use this property to get the age!   */
console.log(jonas_new.age);
console.log(jonas_new.age);

/* without the year as input argument and using "this" parameter above in the method(function)!  */
console.log(jonas_new["calcAge"]());

/* a new challenge: */
// "Jonas is a 46-years old teacher, and he has a/no driver's license."
// console.log(
//   `${jonas_new.firstName} is a ${jonas_new.age}-years old ${
//     jonas_new.job
//   }, and he has ${jonas_new.hasDriversLicense ? "a" : "no"} driver's license.`
// );

// console.log(jonas_new.getSummary());
console.log(jonas_new.getSummary());

/* Starting with loops: */
for (let i = 1; i <= 10; i++) {
  // console.log("Lifting weights repetition " + i + "🏋️‍♂️");
  console.log(`Lifting weights repetition ${i} 🏋️‍♂️`);
}

/* loop through arrays: */
/* Arrays in JS: */
const JonsArray_new = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  "sldkjflksd",
  true,
];

console.log("////getting the elements in the array using for loop:////");
for (let i = 0; i < JonsArray_new.length; i++) {
  console.log(JonsArray_new[i], typeof JonsArray_new[i]);
}

console.log("////getting the type of the elements using for loop:////");
let typeArray = [];
for (let j = 0; j < JonsArray_new.length; j++) {
  /* 1. first method */
  // typeArray[j] = typeof JonsArray_new[j];

  /* 2. second method => push method adds the new element to the end of the array!*/
  // typeArray.push(typeof JonsArray_new[j]);

  /* 3. third method => unshift puts the type of the last element of the array as first element to the new array and so on! */
  typeArray.unshift(typeof JonsArray_new[j]);
}
console.log(typeArray);

console.log("////getting the elements in the array using forEach loop:////");
/* doing the same using forEach */
JonsArray_new.forEach((element) => {
  console.log(element, typeof element);
});

/* A new Practical example: */
const years_neu = [1991, 2007, 1969, 2020];

let age_neue = [];

for (let i = 0; i < years_neu.length; i++) {
  const currentYear = new Date().getFullYear();
  /* 1. first method */
  // age_neue[i] = currentYear - years_neu[i];

  /* 2. second method */
  // age_neue.push(currentYear - years_neu[i]);
}
console.log(age_neue);

/* using forEach to solve this problem: */
years_neu.forEach((element, i) => {
  const currentYear = new Date().getFullYear();
  /* first method: */
  // age_neue[i] = currentYear - element;

  /* second method: */
  age_neue.push(currentYear - element);
});
console.log(age_neue);

/* continue and break */
console.log("////using continue and break:////");
for (let i = 0; i < JonsArray_new.length; i++) {
  if (typeof JonsArray_new[i] !== "string") {
    continue;
    /* it doesn't quit the for loop, rather, it exits the current iteration of the for loop and continue the for loop from the next iteration => doesn't reach the below statement, just will ignore that and goes to the for loop from the beginning(next iteration)*/
  }
  console.log(JonsArray_new[i], typeof JonsArray_new[i]);
}

/* An example for the break: when it finds a number, all the elements after that will be ignored! */
console.log("-----BREAK----------");
for (let i = 0; i < JonsArray_new.length; i++) {
  if (typeof JonsArray_new[i] === "number") {
    break;
    /* when the program finds the first type of the element which is number, it will quit the for loop completely and not only the current iteration => that's why the below statement will be ignored completely and program will be terminated!! */
  }
  console.log(JonsArray_new[i], typeof JonsArray_new[i]);
}

/* Looping Backwards and loop in loop */
const JonsArray_new_1 = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  "sldkjflksd",
  true,
  345,
];
console.log("-----Looping Backwards-------");
for (let i = JonsArray_new_1.length - 1; i >= 0; i--) {
  console.log(i, JonsArray_new_1[i], typeof JonsArray_new_1[i]);
}

/* Exmaple about the loop inside another loop: */
for (let i = 1; i <= 3; i++) {
  console.log("----------- Starting round " + i + " -----------");
  for (let j = 1; j <= 5; j++) {
    console.log(i, "lifting " + j);
  }
}

/* WHILE Loop */
/* Starting with loops: */
for (let i = 1; i <= 10; i++) {
  // console.log("Lifting weights repetition " + i + "🏋️‍♂️");
  console.log(`Lifting weights repetition ${i} 🏋️‍♂️`);
}

console.log("------WHILE LOOP----------");
/* Doing the same with WHILE loop: */
let f = 1;
while (f <= 10) {
  console.log(`Lifting weights repetition ${f} 🏋️‍♂️`);
  f++;
}

/* roll a dice till getting the SIX and then it stops: */
console.log("--------ROLLING A DICE:----------");

// let d = Math.floor(Math.random() * 6) + 1;
let d = 1; /* as a default value instead of a random number!*/
console.log(d);

while (d < 6) {
  console.log("Dice value is: " + d);
  // d = d + 1;
  d = Math.floor(Math.random() * 6) + 1;
  /* just for the sake of a condition and stop the infinite loop, otherwise, we will have an infinite loop! */
  d === 6
    ? console.log("we got the number 6")
    : console.log("we have to continue...");
}
