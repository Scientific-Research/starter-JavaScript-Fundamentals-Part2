console.log("Coding Challenge Nr.4...");

/* 1. */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

/* 2. */
console.log("--------first Solution uisng normal for-------");
const tips = [];
const totals = [];

/* 3. */
const calcTip = (bills4) => {
  for (i = 0; i <= bills4.length - 1; i++) {
    tips[i] =
      bills4[i] >= 50 && bills4[i] <= 300 ? bills4[i] * 0.15 : bills4[i] * 0.2;

    // totals[i] = tips[i] + bills4[i];
    /* or using the push method: */
    totals.push(tips[i] + bills4[i]);
  }
  console.log(tips);
  console.log(totals);
  return `Tip for every bill: ${tips}

  Tip + Bill: ${totals}`;

  // return tips + "" + totals;
};

console.log(calcTip(bills));

/* second solution using the foreach loop: */
console.log("--------second Solution uisng foreach-------");
let tips_new = [];
let totals_new = [];

const calcTip_new = (bills5) => {
  bills5.forEach((bill, i) => {
    tips_new[i] = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

    // totals_new[i] = tips_new[i] + bill;
    /* or using the push method: */
    totals_new.push(tips_new[i] + bill);
  });
  console.log(tips_new, totals_new);
  return `${tips_new} ${totals_new}`;
};

console.log(calcTip_new(bills));
