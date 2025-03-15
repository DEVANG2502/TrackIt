// About.js
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto mt-12 p-8 bg-gray-800 rounded-lg shadow-lg text-white"
    >
      <h2 className="text-3xl font-semibold mb-6 text-yellow-500">About Us</h2>
      <p className="text-lg text-gray-400 mb-4">
        We are a leading provider of advanced truck tracking solutions, committed to empowering businesses with real-time insights and control over their fleet operations.
      </p>
      <p className="text-lg text-gray-400 mb-4">
        Our mission is to revolutionize the way businesses manage their logistics by offering reliable, accurate, and user-friendly tracking services.
      </p>
      <p className="text-lg text-gray-400 mb-6">
        With years of experience and a dedicated team of experts, we strive to deliver exceptional value and support to our clients, ensuring their success in today's dynamic market.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">Our Values</h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>Reliability</li>
            <li>Innovation</li>
            <li>Customer Focus</li>
            <li>Integrity</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">Our Vision</h3>
          <p className="text-gray-400">
            To be the most trusted and innovative provider of truck tracking solutions globally.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;