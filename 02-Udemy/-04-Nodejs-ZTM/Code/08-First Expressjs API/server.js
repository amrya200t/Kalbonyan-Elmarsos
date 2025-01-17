const express = require("express");
const path = require("path");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const PORT = 3000;
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

// HomePage Route
app.get("/", (req, res) => {
  res.render("index", {
    title: "My Friends are very Cleaver",
    caption: "Let's go skiing!",
  });
});

// Friends Routes
app.use("/friends", friendsRouter);

// Messages Routes
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}...`);
});
