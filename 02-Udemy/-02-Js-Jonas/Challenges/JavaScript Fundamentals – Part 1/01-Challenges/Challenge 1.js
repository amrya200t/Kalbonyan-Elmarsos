const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;
const markHigherBMI1 =
  markMass1 / markHeight1 ** 2 > johnMass1 / johnHeight1 ** 2;

const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;
const markHigherBMI2 =
  markMass2 / markHeight2 ** 2 > johnMass2 / johnHeight2 ** 2;

console.log(markHigherBMI1, markHigherBMI2);
