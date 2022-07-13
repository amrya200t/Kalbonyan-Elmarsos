/* CODING CHALLENGE #02 */
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const isMarkHigherBMI = markMass / markHeight ** 2 > johnMass / johnHeight ** 2;

if (isMarkHigherBMI) {
  console.log(
    `Mark's BMI (${(markMass / markHeight ** 2).toFixed(
      1
    )}) is higher than John's (${(johnMass / johnHeight ** 2).toFixed(1)})!`
  );
} else {
  console.log(
    `John's BMI (${(johnMass / johnHeight ** 2).toFixed(
      1
    )}) is higher than Mark's (${(markMass / markHeight ** 2).toFixed(1)})!`
  );
}
