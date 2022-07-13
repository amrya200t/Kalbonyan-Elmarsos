// Challenge #01
/* 
const julia1 = [3, 5, 2, 12, 7];
const julia2 = [9, 16, 6, 8, 3];

const kate1 = [4, 1, 15, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = (dogsJulia, dogsKate) => {
  // TASK1
  const onlyDogsJulia = [...dogsJulia];
  onlyDogsJulia.splice(0, 1);
  onlyDogsJulia.splice(-2);
  // onlyDogsJulia.slice(1,3)
  console.log(onlyDogsJulia);

  // TASK2
  const allDogs = [...onlyDogsJulia, ...dogsKate];
  // const allDogs = onlyDogsJulia.concat(dogsKate);
  console.log(allDogs);

  // TASK3
  allDogs.forEach((age, i) => {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

// TASK4
checkDogs(julia1, kate1);
checkDogs(julia2, kate2);
*/

// Challenge #02
/* 
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
 */

// Challenge #03
/* 
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
 */

// Challenge #04
/* 
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const eatingBehavior = dog => {
  let msg = '';
  if (
    dog.curFood > dog.recommendFood * 0.9 &&
    dog.curFood < dog.recommendFood * 1.1
  ) {
    msg = 'The dog is eating well';
    dog.eatingBehavior = 'good';
  } else if (dog.curFood < dog.recommendFood * 0.9) {
    msg = 'The dog is eating too little';
    dog.eatingBehavior = 'skinny';
  } else if (dog.curFood > dog.recommendFood * 1.1) {
    msg = 'The dog is eating too much';
    dog.eatingBehavior = 'fat';
  }

  return msg;
};

// Task 1
dogs.forEach(dog => {
  const recommendFood = (dog.weight ** 0.75 * 28).toFixed(2);
  dog.recommendFood = recommendFood;
  eatingBehavior(dog);
});
console.log(dogs);

// Task 2
const sarahDogs = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(eatingBehavior(sarahDogs));

// Task 3
const ownersEatTooMuch = dogs
  .filter(dog => dog.eatingBehavior === 'fat')
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.eatingBehavior === 'skinny')
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// Task 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs are eating too much!`);
console.log(
  `${ownersEatTooLittle.join(' and ')}'s dogs are eating too little!`
);

// Task 5
console.log(dogs.some(dog => dog.curFood === dog.recommendFood));

// Task 6
console.log(dogs.some(dog => dog.eatingBehavior === 'good'));

// Task 7
console.log(...dogs.filter(dog => dog.eatingBehavior === 'good'));

// Task 8
const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendFood - b.recommendFood);
console.log(sortedDogs);
 */
