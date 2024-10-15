console.log("Coding Challenge Nr.4...");

/* 1. */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

/* 2. */
const tips = [];
const totals = [];

/* 3. */
const calcTip = (bills4) => {
  for (i = 0; i <= bills4.length - 1; i++) {
    tips[i] =
      bills4[i] >= 50 && bills4[i] <= 300 ? bills4[i] * 0.15 : bills4[i] * 0.2;

    totals[i] = tips[i] + bills4[i];
  }
  console.log(tips);
  console.log(totals);
  return `Tip for every bill: ${tips}

  Tip + Bill: ${totals}`;

  // return tips + "" + totals;
};

console.log(calcTip(bills));
