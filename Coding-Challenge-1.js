/* Part 1 */
const calcAverage = (a, b, c) => {
  const scoreAverage = ((a + b + c) / 3).toFixed(2);
  return `${scoreAverage}`;
};

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

/* 3. */
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins team wins (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas team wins (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins!`;
  }
};

/* Part 2 */
const checkWinnerResult = checkWinner(avgDolphins, avgKoalas);
console.log(checkWinnerResult);
