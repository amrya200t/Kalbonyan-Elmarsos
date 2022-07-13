// Challenge #04
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
