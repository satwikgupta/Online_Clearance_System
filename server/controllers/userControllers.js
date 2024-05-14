const User = require("../models/userSchema");
const mongoose = require("mongoose");

// register route
exports.register = async (req, res) => { 
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
};

exports.login = async (req, res) => {
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
};

exports.home = async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", name: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
};

exports.accountDetails = async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", student: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
};

exports.acadHostel = async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", student: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
};

exports.mess = async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", student: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
};

exports.library = async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", student: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
};

exports.others = async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", student: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
};

exports.getClearance = async (req, res) => {
  try {
    const check = await User.findOne({ email: req.body.email });
    if (check) {
      res.send({ status: "OK", student: check });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
};