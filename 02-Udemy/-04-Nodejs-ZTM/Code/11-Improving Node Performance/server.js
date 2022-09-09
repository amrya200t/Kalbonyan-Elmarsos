const express = require("express");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // event loop is blocked...
  }
}

app.get("/", (req, res) => {
  res.send(`Performance example ${process.pid}`);
});

app.get("/timer", (req, res) => {
  // delay the response
  delay(9000);
  res.send(`Ding ding ding! ${process.pid}`);
});

console.log("Running server.js...");

console.log("Worker process started.");
app.listen(3000);

////////////////////////////////
////// BLOCKING FUNCTIONS //////
////////////////////////////////
// EXAMPLES:
// JSON.stringify()
// JSON.parse()
// [1,2,3,4,5].sort()
// crypto.scrypt()

////////////////////////////////
/////////// SOLUTIONS //////////
////////////////////////////////
//  Node Cluster
