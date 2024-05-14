const router = require("express").Router();
const userController = require("../controllers/userControllers");

// register route
router.post("/register", userController.register);

// Login Route
router.post("/login", userController.login);

// Home Route
router.post("/home", userController.home);

// Account Details
router.post("/accountdetails", userController.accountDetails);

// Academics and Hostel
router.post("/acadhostel", userController.acadHostel);

// Mess
router.post("/mess", userController.mess);

// Library
router.post("/library", userController.library);

// Others
router.post("/others", userController.others);

// Get Clearance
router.post("/getclearance", userController.getClearance);

module.exports = router;
