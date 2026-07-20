const router = require("express").Router();
const auth = require("../controllers/authController");

router.post("/signup", auth.signup);

router.post("/login", auth.login);

router.post("/send-otp", auth.sendLoginOtp);

router.post("/verify-otp", auth.verifyOtp);

module.exports = router;