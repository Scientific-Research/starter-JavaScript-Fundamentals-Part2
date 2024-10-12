/* Part 1 */
const calcAverage = (a, b, c) => {
  const scoreAverage = ((a + b + c) / 3).toFixed(2);
  return `${scoreAverage}`;
};

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
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
