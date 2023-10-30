require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const initModels = require("./models/initModels");
const { rateLimit } = require("express-rate-limit");
const patch = require("path");

const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 min
  max: 15,
  message: "Too many request, wait 1 minute to continue",
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(limiter);

app.get("/", (req, res) => {
  res.sendFile(patch.resolve(__dirname, "./layout/responseHome.html"));
});

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`The service is runnig on http://localhost:${port}`);
});

db.authenticate()
  .then(() => console.log("DataBase Authenticated"))
  .catch((err) => console.log(err));

db.sync({ force: false })
  .then(() => {
    // generateData();
  })
  .catch((err) => console.log(err));

initModels();
