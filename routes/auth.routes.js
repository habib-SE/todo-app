import { Router } from 'express';
import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

const router = Router();

// Sign Up
router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: "Username already in use" });
        }

        // Hash the password
        const hashPassword = bcrypt.hashSync(password, 10);
        const user = new User({ email, username, password: hashPassword });

        await user.save();
        res.status(201).json({
            message: "Sign Up successfully",
            user: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Log In
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const { password: userPassword, ...others } = user._doc;
        res.status(200).json({
            message: "Login successful",
            user: others
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


export default router;
