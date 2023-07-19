const express = require("express");
const { registerNewUser, refreshToken, logOut, logIn, getUserDetails, postHouseDetails, getHouseList, editHouseDetails, deleteHouse, getAllHousesList, bookHouse } = require("../controllers/authController");
const { verifyJwtToken } = require("../middleware/jwt");
const router = express.Router();

router.use(express.json())

router.get("/house_list", verifyJwtToken, getHouseList)
router.get("/all_houses_list", getAllHousesList)

router.post("/register", registerNewUser)
router.post("/log_in", logIn)
router.post("/get_user_details", verifyJwtToken, getUserDetails)
router.post("/logout", verifyJwtToken, logOut)
router.post("/house_details", verifyJwtToken, postHouseDetails)
router.post("/bookings", verifyJwtToken, bookHouse)
router.post("/refresh_token", refreshToken)

router.patch("/edit_house_details", verifyJwtToken, editHouseDetails)

router.delete("/delete_houses/:id", verifyJwtToken, deleteHouse);

module.exports = router;