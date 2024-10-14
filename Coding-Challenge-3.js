/* 1. */
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    const bmi = `${this.mass}` / `${this.height ** 2}`;
    return bmi.toFixed(2);
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    const bmi = `${this.mass}` / `${this.height ** 2}`;
    return bmi.toFixed(2);
  },
};

/* 2. */
/* the method adde above in each object separately! */
console.log("Mark's BMI: " + mark.calcBMI());
console.log("John's BMI: " + john.calcBMI());

/* 3. */
/* using Ternary operator: */
console.log(
  `${mark.calcBMI()}` > `${john.calcBMI()}`
    ? `${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${
        john.firstName
      }'s (${john.calcBMI()})!`
    : `${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${
        mark.firstName
      }'s (${mark.calcBMI()})!`
);

/* using if-else: */
