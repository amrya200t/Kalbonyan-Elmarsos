const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const planets = require("./planets.mongo");

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

// const = new Promise((resolve, reject)=>{})
function loadPlanetsData() {
  // Reads the data as raw buffer bits.
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      // Parse it as CSV data.
      .pipe(
        parse({
          comment: "#", // Ignore the lines that start with #
          columns: true, // Convert each line into an object
        })
      )
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
          savePlanet(data);
        }
      })
      .on("error", (err) => {
        reject(err);
      })
      .on("end", async () => {
        const countPlanetsFound = (await getAllPlanets()).length;
        console.log(`${countPlanetsFound} habitable planets found!`);
        resolve();
      });
  });
}

async function savePlanet(planet) {
  // insert + update = upsert
  try {
    await planets.updateOne(
      {
        keplerName: planet.keplerName,
      },
      {
        keplerName: planet.keplerName,
      },
      {
        upsert: true,
      }
    );
  } catch (error) {
    console.error(`Could not save planet ${error}`);
  }
}

async function getAllPlanets() {
  return await planets.find(
    {},
    {
      __v: 0,
      _id: 0,
    }
  );
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
