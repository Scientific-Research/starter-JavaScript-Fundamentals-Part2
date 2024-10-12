/* 1.first part */
const calcAverage = (a, b, c, n) => {
  const scoreAverage = ((a, b, c) / 3).toFixed(2);
  // return scoreAverage;
  return `${scoreAverage} for the ${n} time!`;
};

const scoreAverage = calcAverage(44, 23, 71, 1);
console.log(scoreAverage);

/* doing the same solution but with normal function instead of arrow function: */
function calcAverage2(a, b, c, n) {
  const scoreAverage = ((a, b, c) / 3).toFixed(2);
  // return scoreAverage;
  return `${scoreAverage} for the ${n} time!`;
}

const scoreAverage_new = calcAverage2(44, 23, 71, 1);
console.log(scoreAverage_new);
