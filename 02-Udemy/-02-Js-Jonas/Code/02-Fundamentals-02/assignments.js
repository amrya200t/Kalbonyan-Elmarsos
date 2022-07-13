"use strict";
/* =============================================== */
function log(...data) {
  console.log(...data);
}
/* =============================================== */

/* =============================================== */
/* ============== LECTURE: Functions ============= */
/* =============================================== */
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const firstCountry = describeCountry("Egypt", 102.3, "Cairo");
const secondCountry = describeCountry("United Kingdom", 67.22, "London");
const thirdCountry = describeCountry("Canada", 38.01, "Ottawa");
log(firstCountry);
log(secondCountry);
log(thirdCountry);
log("----------------------------------------");

/* =============================================== */
/*  LECTURE: Function Declarations vs. Expressions */
/* =============================================== */
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}
const per1 = percentageOfWorld1(102.3);
const per2 = percentageOfWorld1(67.22);
const per3 = percentageOfWorld1(38.01);
log(per1, per2, per3);

const percentageOfWorld = function (population) {
  return ((population / 7900) * 100).toFixed(2);
};

log(
  percentageOfWorld(102.3),
  percentageOfWorld(67.22),
  percentageOfWorld(38.01)
);
log("----------------------------------------");

/* =============================================== */
/* =========== LECTURE: Arrow Functions ========== */
/* =============================================== */
const percentageOfWorld3 = (population) => {
  return ((population / 7900) * 100).toFixed(2);
};

log(
  percentageOfWorld3(102.3),
  percentageOfWorld3(67.22),
  percentageOfWorld3(38.01)
);
log("----------------------------------------");

/* =============================================== */
/* == LECTURE: Functions Calling Other Functions = */
/* =============================================== */
const describePopulation = (country, population) => {
  return `${country} has ${population} million people, 
  which is about ${percentageOfWorld(population)}% of the world.`;
};

log(describePopulation("Egypt", 102.3));
log(describePopulation("United Kingdom", 67.22));
log(describePopulation("Canada", 38.01));
log("----------------------------------------");

/* =============================================== */
/* ======= LECTURE: Introduction to Arrays ======= */
/* =============================================== */
const populations = [102.3, 67.22, 38.01, 329.5];
log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
log(percentages);
log("----------------------------------------");

/* =============================================== */
/* == LECTURE: Basic Array Operations (Methods) == */
/* =============================================== */

log("----------------------------------------");

/* =============================================== */
/* ======= LECTURE: Introduction to Objects ====== */
/* =============================================== */

log("----------------------------------------");

/* =============================================== */
/* ====== LECTURE: Dot vs. Bracket Notation ====== */
/* =============================================== */

log("----------------------------------------");

/* =============================================== */
/* ============ LECTURE: Object Methods ========== */
/* =============================================== */

log("----------------------------------------");

/* =============================================== */
/* ======= LECTURE: Iteration: The for Loop ====== */
/* =============================================== */

log("----------------------------------------");

/* ================================================ */
/* LECTURE: Looping Arrays, Breaking and Continuing */
/* ================================================ */

log("----------------------------------------");

/* =============================================== */
/* = LECTURE: Looping Backwards and Loops in Loops */
/* =============================================== */

log("----------------------------------------");

/* =============================================== */
/* =========== LECTURE: The while Loop =========== */
/* =============================================== */
log("----------------------------------------");
