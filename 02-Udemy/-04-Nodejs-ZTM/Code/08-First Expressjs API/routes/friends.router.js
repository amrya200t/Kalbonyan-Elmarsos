const express = require("express");
const friendsController = require("../controllers/friends.controller");

// Friends Routes
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("IP Address:", req.ip);
  next();
});

friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter;
