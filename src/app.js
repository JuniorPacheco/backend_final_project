require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const initModels = require("./models/initModels");
const generateData = require("./config/initDB");
const { rateLimit } = require("express-rate-limit");

const port = process.env.PORT || 3000;

const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minutes
	max: 100,
  message: "Too many request, wait 5 minutes to continue"
})

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());
app.use(limiter)

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`The service is runnig on http://localhost:${port}`);
});

db.authenticate()
  .then(() => console.log("DataBase Authenticated"))
  .catch((err) => console.log(err));

db.sync({ force: true })
  .then(() => {
    generateData();
  })
  .catch((err) => console.log(err));

initModels();
