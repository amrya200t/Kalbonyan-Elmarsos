const mission = "learn";

mission === "learn"
  ? console.log("Time to write some Node Code!")
  : console.log(`Is ${mission} really more fun?`);

const args = process.argv[2];
console.log(args);
