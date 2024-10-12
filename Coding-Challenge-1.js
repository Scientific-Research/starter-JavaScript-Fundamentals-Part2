/* Part 1 */
const calcAverage = (a, b, c) => {
  const scoreAverage = ((a + b + c) / 3).toFixed(2);
  return `${scoreAverage}`;
};

const scoreAverage = calcAverage(44, 23, 71);
console.log(scoreAverage);

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
const calcAverageForBothTeams = (a, b, c, d, e, f) => {
  const avgDolphins = ((a + b + c) / 3).toFixed(2);
  const avgKoalas = ((d + e + f) / 3).toFixed(2);
  console.log(avgDolphins, avgKoalas);

  const checkWinnerResult = checkWinner(avgDolphins, avgKoalas);
  // return `${avgDolphins} ${avgKoalas}`;
  return checkWinnerResult;
};

const scoreAverage2 = calcAverageForBothTeams(85, 54, 41, 23, 34, 27);
console.log(scoreAverage2);
