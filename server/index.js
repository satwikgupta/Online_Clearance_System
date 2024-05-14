require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("./db/dbconfig.js");


const userRoute = require("./route/userRoute");

app.use("/", userRoute);



const port = process.env.port || 5000;
app.listen(port, () => {
  console.log("Server is listening...");
});
