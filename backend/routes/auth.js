import express from "express";
import User from "../models/User.js";  // Ensure the path is correct
import bcrypt from "bcrypt";  // Make sure bcrypt is installed
import jwt from "jsonwebtoken";

const router = express.Router();

// REGISTER USER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error(error);  // Print error for debugging
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
