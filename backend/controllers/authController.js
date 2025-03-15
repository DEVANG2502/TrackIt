import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "defaultsecret", {
    expiresIn: "30d",
  });
};

// **Signup Logic**
export const registerUser = async (req, res) => {
  try {
    const { name, surname, email, password, transportType } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      name,
      surname,
      email,
      password: hashedPassword,
      transportType,
    });

    if (user) {
      return res.status(201).json({
        message: "Registration successful!",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        },
        redirectUrl: "/dashboard",
      });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// **Login Logic**
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ User not found with email:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log("✅ User found:", user);

    // Debug bcrypt comparison
    console.log("Entered password:", password);
    console.log("Stored hashed password:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("❌ Password does not match!");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log("✅ Password matches! Login successful.");

    return res.json({
      message: "Login successful!",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
      redirectUrl: "/dashboard",
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
