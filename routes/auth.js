const express = require("express");
const { registerNewUser, refreshToken, logOut } = require("../controllers/authController");
const { verifyJwtToken } = require("../middleware/jwt");
const router = express.Router();

router.use(express.json())

router.post("/register", registerNewUser)
router.post("/logout", verifyJwtToken, logOut)
router.post("/refresh_token", refreshToken)

module.exports = router;