const express = require("express");

const planetsRouter = require("./planets/planets.router");
const launchesRouter = require("./launches/launches.router");

const api = express.Router();

// Planets Router
api.use("/planets", planetsRouter);
// Launches Router
api.use("/launches", launchesRouter);

module.exports = api;
