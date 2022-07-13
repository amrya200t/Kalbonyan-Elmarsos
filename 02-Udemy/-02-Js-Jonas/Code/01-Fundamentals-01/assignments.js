/* =============================================== */
/* ======== LECTURE: Values and Variables ======== */
/* =============================================== */
const country = "Egypt";
const continent = "Africa";
let population = 105;

console.log(country);
console.log(continent);
console.log(population);
console.log("----------------------------------------");

/* =============================================== */
/* ============= LECTURE: Data Types ============= */
/* =============================================== */
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log("----------------------------------------");

/* =============================================== */
/* ========= LECTURE: let, const and var ========= */
/* =============================================== */
language = "Arabic";
console.log(language);
console.log(typeof language);
console.log("----------------------------------------");

/* =============================================== */
/* ========== LECTURE: Basic Operators =========== */
/* =============================================== */
console.log(population / 2);
population++;
console.log(population);
console.log(6 < population);
console.log(33 > population);

const description1 =
  country +
  " is in" +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description1);
console.log("----------------------------------------");

/* =============================================== */
/* ==== LECTURE: Strings and Template Literals === */
/* =============================================== */
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);
console.log("----------------------------------------");

/* =============================================== */
/* LECTURE: Taking Decisions: if / else Statements */
/* =============================================== */
if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(`${country}'s population is ${33 - population} below average.`);
}
console.log("----------------------------------------");

/* =============================================== */
/* ==== LECTURE: Type Conversion and Coercion ==== */
/* =============================================== */
// '9' - '5';               => 4
// '19' - '13' + '17';      => '617'
// '19' - '13' + 17;        => '23'
// '123' < 57;              => false
// 5 + 6 + '4' + 9 - 4 - 2; => 1143
console.log(
  "9" - "5",
  "19" - "13" + "17",
  "19" - "13" + 17,
  "123" < 57,
  5 + 6 + "4" + 9 - 4 - 2
);
console.log("----------------------------------------");

/* =============================================== */
/* *** LECTURE: Equality Operators: == vs. === *** */
/* =============================================== */
/* const numNeighbors = Number(
  prompt("How many neighbor countries does your country have?")
); 
if (numNeighbors === 1) {
  console.log("Only 1 border!");
} else if (numNeighbors > 1) {
  console.log("More than 1 border");
} else if (numNeighbors === 0) {
  console.log("No borders");
}
console.log("----------------------------------------");
*/

/* =============================================== */
/* ========== LECTURE: Logical Operators ========= */
/* =============================================== */
if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
console.log("----------------------------------------");

/* =============================================== */
/* ======== LECTURE: The switch Statement ======== */
/* =============================================== */
language = "arabic";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log(`${language}: MOST number of native speakers!`);
    break;
  case "spanish":
    console.log(`${language}: 2nd place in number of native speakers`);
    break;
  case "english":
    console.log(`${language}: 3rd place`);
    break;
  case "hindi":
    console.log(`${language}: Number 4`);
    break;
  case "arabic":
    console.log(`${language}: 5th most spoken language`);
    break;
  default:
    console.log(`${language}: Great language too :D`);
}
console.log("----------------------------------------");

/* =============================================== */
/* = LECTURE: The Conditional (Ternary) Operator = */
/* =============================================== */
// population > 33
//   ? console.log(`${country}'s population is above average.`)
//   : console.log(`${country}'s population is below average.`);
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
console.log("----------------------------------------");
