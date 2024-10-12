const calcAverage = (a, b, c) => {
  const scoreAverage = ((a + b + c) / 3).toFixed(2);
  return `${scoreAverage}`;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins team wins 🏆 (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas team wins 🏆 (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins!`;
  }
};

/* DATA SET 1 */
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);
let checkWinnerResult = checkWinner(avgDolphins, avgKoalas);
console.log(checkWinnerResult);

/* DATA SET 2 */
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinnerResult = checkWinner(avgDolphins, avgKoalas);
console.log(checkWinnerResult);
