require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// * DB Connection
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.log("Connection to MongoDB failed.\n", err);
    return console.log("Connected to MongoDB");
  }
);

// * Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: `${process.env.CLIENT_URL}`, credentials: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `${process.env.CLIENT_URL}`);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// * Server Setup
const port = process.env.PORT || 5000;
const server = app.listen(port, console.log(`Server Started on port ${port}`));

// * Importing router
const user = require("./routes/participant");
const team = require("./routes/team");
const event = require("./routes/event");

// // this -->
app.use(
  csrf({
    cookie: {
      // secure: true,
      httpOnly: true,
      maxAge: 8 * 60 * 60 * 1000,
    },
  })
);

// * Routing Setup
app.use("/api/user", user);
app.use("/api/team", team);
app.use("/api/event", event);

// * Production setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "Client", "build")));
  app.get("/*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "Client", "build", "index.html"));
  });
}

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
});

process.on("uncaughtException", (err, promise) => {
  console.log(`Error: ${err.message}`);
});
