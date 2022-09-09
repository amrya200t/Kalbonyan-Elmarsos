const {
  getAllLaunches,
  scheduleNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
} = require("../../models/launches.model");

const { getPagination } = require("../../services/query");

async function httpGetAllLaunches(req, res) {
  const { skip, limit } = getPagination(req.query);
  const launches = await getAllLaunches(skip, limit);
  return res.status(200).json(launches);
}

async function httpAddNewLaunches(req, res) {
  const launch = { ...req.body, launchDate: new Date(req.body.launchDate) };
  if (
    !req.body.mission ||
    !req.body.rocket ||
    !req.body.launchDate ||
    !req.body.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property.",
    });
  }

  if (!req.body.mission.trim() || !req.body.rocket.trim()) {
    return res.status(400).json({
      error: "Invalid mission name or rocket Type.",
    });
  }
  if (
    new Date(req.body.launchDate).toString() === "Invalid Date" ||
    isNaN(new Date(req.body.launchDate))
  ) {
    return res.status(400).json({
      error: "Invalid launch Date.",
    });
  }

  await scheduleNewLaunch(launch);
  return res.status(201).json(launch);
}

async function httpAbortLaunch(req, res) {
  const launchId = +req.params.id;
  console.log(launchId);
  const existsLaunch = await existsLaunchWithId(launchId);

  if (!existsLaunch) {
    // if launch doesn't exist.
    return res.status(404).json({
      error: "Launch not found.",
    });
  }
  const aborted = await abortLaunchById(launchId);

  return !aborted
    ? res.status(400).json({
        error: "Launch not aborted.",
      })
    : res.status(200).json({
        ok: true,
      });
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunches,
  httpAbortLaunch,
};
