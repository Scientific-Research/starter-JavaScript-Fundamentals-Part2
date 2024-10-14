/* 1. */
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    /* this.bmi creates bmi property in mark object and we can access that like other properties in this object using "this" keyword!*/
    return this.bmi;
    /* we return it to call it directly without using calcBMI function, because it is already a property of this object like other properties like firsName, lastName,... */
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    /* this.bmi creates bmi property in mark object and we can access that like other properties in this object using "this" keyword!*/
    return this.bmi;
    /* we return it to call it directly without using calcBMI function, because it is already a property of this object like other properties like firsName, lastName,... */
  },
};

/* 2. */
/* the method adde above in each object separately! */
console.log("Mark's BMI: " + mark.calcBMI());
console.log("John's BMI: " + john.calcBMI());

console.log(john.bmi);
/* we can call the bmi property directly without calling its function(calcBMI()), because we created it in calcBMI() function above using the "this" keyword which means the object(mark/john) itself! */
console.log(mark.bmi);

/* 3. */
/* using Ternary operator with bmi property instead of calcBMI() method(function) => anyway, the result at the end is the same! */
console.log(
  `${mark.bmi}` > `${john.bmi}`
    ? `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi})!`
    : `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`
);

/* using if-else with calcBMI() method(function) instead of bmi property => anyway, the result at the end is the same!*/
if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.firstName} ${
      mark.lastName
    }'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${
      john.lastName
    }'s (${john.calcBMI()})!`
  );
} else {
  console.log(
    `${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.firstName
    }'s (${mark.calcBMI()})!`
  );
}
