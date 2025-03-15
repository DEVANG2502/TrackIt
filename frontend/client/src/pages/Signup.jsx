import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    transportType: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      localStorage.setItem("authToken", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            type="text"
            name="name"
            placeholder="First Name"
            value={formData.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.05 }}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 transition"
          />
          <motion.input
            type="text"
            name="surname"
            placeholder="Last Name"
            value={formData.surname}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.05 }}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 transition"
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.05 }}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 transition"
          />
          <motion.input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.05 }}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 transition"
          />
          <motion.input
            type="text"
            name="transportType"
            placeholder="Transport Type"
            value={formData.transportType}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.05 }}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 transition"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-green-600 text-white py-2 rounded-md font-semibold shadow-md hover:bg-green-700 transition"
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
