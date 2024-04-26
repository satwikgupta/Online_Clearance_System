require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
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

const User = require("./models/userSchema");

// Routes
// register route

app.post("/register", async (req, res) => {
  console.log(req.body);
  const {
    name,
    email,
    rollno,
    branch,
    year,
    password,
    mess,
    acadHostel,
    library,
    extra,
    phoneno,
  } = req.body;

  if (
    !name ||
    !email ||
    !rollno ||
    !branch ||
    !year ||
    !password ||
    !mess ||
    !acadHostel ||
    !library ||
    !extra ||
    !phoneno
  ) {
    return res
      .status(400)
      .send({ status: "Insufficient information provided" });
  }

  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.status(409).send({ status: "Email already exists" });
    } else {
      console.log("Proceeding to database");
      const user = await User.create({
        name,
        email,
        rollno,
        branch,
        year,
        password,
        mess,
        acad_hostel: acadHostel,
        library,
        extra,
        phoneno,
      });

      console.log("Done with database");

      return res.status(201).send({ status: "OK", user }); // Send only user object and status
    }
  } catch (error) {
    console.error("Registration error:", error.message); // Log the actual error for debugging
    return res.status(500).send({ status: "Registration failed" }); // Send a generic error message
  }
});


// Login Route
app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const check = await User.findOne({ email: email });
    if (check.email === email && check.password === password) {
      const token = email;
      res.json({ status: "OK", user: token });
    } else {
      res.send({ status: "error" });
    }
  } catch (error) {
    res.send({ status: "error" });
  }
});

// Home Route
app.post("/home", async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", name: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});

// Account Details
app.post("/accountdetails", async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", student: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});

// Academics and Hostel
app.post("/acadhostel", async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", student: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});

// Mess
app.post("/mess", async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", student: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});

// Library
app.post("/library", async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", student: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});

// Others
app.post("/others", async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", student: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});

// Get Clearance
app.post("/getclearance", async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", student: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});

app.get("/", async (req, res) => {
  const user = await User.find({});
  res.send(user);
});

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log("Server is listening...");
});
