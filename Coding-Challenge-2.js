/* 1. */
let tip;
const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return (tip = bill * 0.15);
  } else {
    return (tip = bill * 0.2);
  }
};

const tip_final = calcTip(100);
console.log(tip_final);

/* 2.using array as input data for the arrow function: */
const bills = [125, 555, 44];
const tip_final_1 = calcTip(bills[0]);
const tip_final_2 = calcTip(bills[1]);
const tip_final_3 = calcTip(bills[2]);

/* 3. creating the tip array containing all the above three tips: */
const tips = [tip_final_1, tip_final_2, tip_final_3];
console.log(tips);

/* 4. create a new array called 'total' containing the bill + tip */
const total = [125 + tip_final_1, 555 + tip_final_2, 44 + tip_final_3];
console.log(total);
