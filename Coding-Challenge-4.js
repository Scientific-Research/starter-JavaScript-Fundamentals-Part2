console.log("Coding Challenge Nr.4...");

/* 1. */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

/* 2. */
const tips = [];
const totals = [];

/* 3. */
const calcTip = (bills) => {
  for (i = 0; i <= bills.length - 1; i++) {
    tips[i] =
      bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2;

    totals[i] = tips[i] + bills[i];
  }

  console.log(tips);
  console.log(totals);
};

calcTip(bills);
