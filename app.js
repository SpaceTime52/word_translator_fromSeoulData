require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", routes);

app.listen(3001, () => {
  console.log(`Start listen Server: 3001`);
});

module.exports = app;
