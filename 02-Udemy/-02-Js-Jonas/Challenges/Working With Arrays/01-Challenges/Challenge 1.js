// Challenge #01
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
