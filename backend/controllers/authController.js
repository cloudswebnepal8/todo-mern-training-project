const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendOtp = require("../utils/sendOtp");

exports.signup = async (req, res) => {

    const { name, email, password } = req.body;

    const exist = await User.findOne({ email });

    if (exist)
        return res.status(400).json({ message: "User already exists" });

    const hash = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hash });

    res.json({ message: "Signup Success" });
};



exports.login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
        return res.status(400).json({ message: "Invalid Email" });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
        return res.status(400).json({ message: "Wrong Password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });

    res.json({ token });
};


exports.sendLoginOtp = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
        return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);

    if (!match)
        return res.status(400).json({ message: "Wrong Password" });

    const otp = Math.floor(100000 + Math.random() * 900000);

    user.otp = otp;

    user.otpExpires = Date.now() + 1 * 60 * 1000;

    await user.save();

    await sendOtp(email, otp);

    res.json({
        message: "OTP Sent"
    });

};


exports.verifyOtp = async (req, res) => {

    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user)
        return res.status(400).json({
            message: "User not found"
        });

    if (new Date() > user.otpExpires) {
        return res.status(400).json({
            message: "OTP has expired"
        });
    }

    if (user.otp != otp)
        return res.status(400).json({
            message: "Invalid OTP"
        });

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );

    user.otp = "";

    await user.save();

    res.json({
        token
    });

};