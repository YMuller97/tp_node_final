const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();
// const auth = require("../middleware/auth");

router.post("/register", userController.addUser);

router.post("/login", userController.signIn);

module.exports = router;
