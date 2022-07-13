// Challenge #02
const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  // TASK 1
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + 4 * age));
  console.log(`The dogs age in human years: [${humanAge.join(', ')}]`);

  // TASK 2
  const adultDogs = humanAge.filter(age => age >= 18);
  console.log(`All adult dogs: [${adultDogs.join(', ')}]`);

  // TASK 3
  const avgAge = adultDogs.reduce(
    (acc, curr, i, arr) => acc + curr / arr.length,
    0
  );
  console.log(`The average human age of all adult dogs: ${avgAge}`);
};

// TASK 4
calcAverageHumanAge(ages1);
calcAverageHumanAge(ages2);
