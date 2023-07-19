const express = require("express");
const { registerNewUser, refreshToken, logOut, logIn, getUserDetails, postHouseDetails } = require("../controllers/authController");
const { verifyJwtToken } = require("../middleware/jwt");
const router = express.Router();

router.use(express.json())

router.post("/register", registerNewUser)
router.post("/log_in", logIn)
router.post("/get_user_details", verifyJwtToken, getUserDetails)
router.post("/logout", verifyJwtToken, logOut)
router.post("/house_details", verifyJwtToken, postHouseDetails)
router.post("/refresh_token", refreshToken)

module.exports = router;