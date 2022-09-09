const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
// Reads the data as raw buffer bits.
fs.createReadStream("kepler_data.csv")
  // Parse it as CSV data.
  .pipe(
    parse({
      comment: "#", // Ignore the lines that start with #
      columns: true, // Convert each line into an object
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(habitablePlanets);
    console.log(habitablePlanets.map((planet) => planet["keplerName"]));
    console.log(`${habitablePlanets.length} habitable planets found!`);
    console.log("done");
  });
