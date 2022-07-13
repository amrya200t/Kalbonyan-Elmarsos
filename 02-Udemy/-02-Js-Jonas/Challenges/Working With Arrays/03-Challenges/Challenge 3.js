// Challenge #03
const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages => {
  const avgHumanAge = ages
    .map(age => (age <= 2 ? 2 * age : 16 + 4 * age))
    .filter(age => age >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

  console.log(`The average human age of all adult dogs: ${avgHumanAge}`);
};
calcAverageHumanAge(ages1);
calcAverageHumanAge(ages2);
